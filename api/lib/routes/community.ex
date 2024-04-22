defmodule Routes.Community do
  use Plug.Router

  alias Spek.UserSession
  alias Operations.Channels
  alias Operations.Communities
  alias Operations.Users

  plug(:match)
  plug(Plugs.CheckAuth, %{shouldThrow: false})
  plug(:dispatch)

  # TODO: fix warning
  get "/all" do
    communities = Communities.get_top_communities(40)

    conn
    |> send_resp(200, Jason.encode!(%{"communities" => communities}))
  end

  get "/:slug" do
    %Plug.Conn{params: %{"slug" => slug}} = conn

    user_id =
      if not Map.has_key?(conn.assigns, :user_id),
        do: Ecto.UUID.autogenerate(),
        else: conn.assigns.user_id

    community = Communities.get_community_by_slug(slug, user_id)

    cond do
      is_nil(community) ->
        conn
        |> put_resp_content_type("application/json")
        |> send_resp(400, Jason.encode!(%{error: "That community does not exist"}))

      community.isPrivate ->
        conn
        |> put_resp_content_type("application/json")
        |> send_resp(400, Jason.encode!(%{error: "Community is not public"}))

      true ->
        channels = Channels.get_channels_by_community_id(community.id)

        conn
        |> put_resp_content_type("application/json")
        |> send_resp(200, Jason.encode!(%{community: community, channels: channels}))
    end
  end

  get "/:id/members" do
    %Plug.Conn{params: %{"id" => id}} = conn

    case Ecto.UUID.cast(id) do
      {:ok, uuid} ->
        members = Communities.get_community_members(uuid)

        conn
        |> send_resp(200, Jason.encode!(members))

      _ ->
        conn
        |> send_resp(400, Jason.encode!(%{error: "Community id is not valid"}))
    end
  end

  get "/:id/threads" do
    %Plug.Conn{params: %{"id" => id}} = conn

    case Ecto.UUID.cast(id) do
      {:ok, uuid} ->
        conn
        |> send_resp(200, Jason.encode!(uuid))

      _ ->
        conn
        |> send_resp(400, Jason.encode!(%{error: "Community id is not valid"}))
    end
  end

  post "/create" do
    has_user_id = Map.has_key?(conn.assigns, :user_id)

    if has_user_id do
      user = Users.get_user_id(conn.assigns.user_id)

      data = %{
        "ownerId" => user.id,
        "name" => conn.body_params["name"],
        "description" => conn.body_params["description"]
      }

      result = Operations.Communities.create_community(data)

      case result do
        {:ok, community, _} ->
          conn
          |> send_resp(200, Jason.encode!(%{community: community}))

        {:error,
         %Ecto.Changeset{
           errors: [name: {"has already been taken", _}]
         }} ->
          conn
          |> send_resp(200, Jason.encode!(%{error: "Community name is taken."}))
      end
    else
      conn
      |> send_resp(402, "UNAUTHORIZED")
    end
  end

  post "/join" do
    has_user_id = Map.has_key?(conn.assigns, :user_id)

    if has_user_id do
      communityId = conn.body_params["communityId"]
      userId = conn.body_params["userId"]

      {:ok, resp} = Operations.Communities.join_community(communityId, userId)

      UserSession.send_ws(userId, nil, %{
        op: "new_community_join",
        d: %{success: true, communityId: communityId}
      })

      conn
      |> send_resp(200, Jason.encode!(%{ok: resp}))
    else
      conn
      |> send_resp(401, Jason.encode!(%{error: "Not authorized"}))
    end
  end

  post "/leave" do
    has_user_id = Map.has_key?(conn.assigns, :user_id)

    if has_user_id do
      communityId = conn.body_params["communityId"]
      userId = conn.body_params["userId"]

      # TODO: Get something from the mutation
      Operations.Communities.leave_community(communityId, userId)

      UserSession.send_ws(userId, nil, %{
        op: "new_community_leave",
        d: %{success: true, communityId: communityId}
      })

      conn
      |> send_resp(200, Jason.encode!(%{ok: true}))
    else
      conn
      |> send_resp(401, Jason.encode!(%{error: "Not authorized"}))
    end
  end

  delete "/:id" do
    %Plug.Conn{params: %{"id" => id}} = conn

    case Ecto.UUID.cast(id) do
      {:ok, uuid} ->
        Operations.Communities.delete_community(uuid)

        conn
        |> send_resp(200, Jason.encode!(%{success: true}))

      _ ->
        conn
        |> send_resp(400, Jason.encode!(%{error: " invalid id"}))
    end
  end

  match _ do
    conn
    |> send_resp(404, "Not found")
  end
end
