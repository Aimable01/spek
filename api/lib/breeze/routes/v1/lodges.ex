defmodule Breeze.Routes.V1.Lodges do
  use Plug.Router

  alias Breeze.Plugs
  alias Telescope.Lodges
  alias Pulse.LodgeSession

  plug(Plugs.CheckAuth, %{shouldThrow: true})
  plug(:match)
  plug(:dispatch)

  get "/:lodge_id" do
    %Plug.Conn{params: %{"lodge_id" => lodge_id}} = conn

    case Lodges.get_lodge_by_id(lodge_id) do
      nil ->
        conn
        |> send_resp(404, Jason.encode!(%{message: "DM not found"}))

      lodge ->
        conn
        |> send_resp(200, Jason.encode!(lodge))
    end
  end

  get "/:lodge_id/members" do
    %Plug.Conn{params: %{"lodge_id" => lodge_id}} = conn

    case Lodges.get_lodge_by_id(lodge_id) do
      nil ->
        conn
        |> send_resp(404, Jason.encode!(%{message: "DM not found"}))

      lodge ->
        conn
        |> send_resp(200, Jason.encode!(lodge.recipients))
    end
  end

  get "/:lodge_id/join-info" do
    %Plug.Conn{params: %{"lodge_id" => lodge_id}} = conn

    lodge = Lodges.get_lodge_by_id(lodge_id)

    if not is_nil(lodge) do
      LodgeSession.join_lodge(lodge.id, conn.assigns.user_id)
    end

    conn
    |> send_resp(200, Jason.encode!(lodge))
  end

  post "/create" do
    data = %{
      owner_id: conn.assigns.user_id,
      users: conn.body_params["users"]
    }

    type = if length(data.users) > 2, do: 2, else: 1

    case Lodges.lodge_lookup(data.users) do
      nil ->
        recipients = Lodges.get_lodge_recipients(data.users)

        lodge = Lodges.create_lodge(recipients, data.owner_id, type)

        conn
        |> send_resp(200, Jason.encode!(%{"lodge" => lodge}))

      id ->
        conn
        |> send_resp(200, Jason.encode!(%{"lodge" => %{id: id}}))
    end
  end

  delete "/:lodge_id" do
    %Plug.Conn{params: %{"lodge_id" => lodge_id}} = conn

    Lodges.delete_lodge(lodge_id, conn.assigns.user_id)

    conn
    |> send_resp(200, Jason.encode!(%{success: true}))
  end

  post "/:lodge_id/add-recipient" do
    %Plug.Conn{params: %{"lodge_id" => lodge_id, "userId" => user_id}} = conn

    lodge = Lodges.get_lodge_by_id(lodge_id)

    case Lodges.add_recipient(lodge, user_id) do
      nil ->
        conn
        |> send_resp(200, Jason.encode!(%{success: false}))

      _ ->
        conn
        |> send_resp(200, Jason.encode!(%{success: true}))
    end
  end

  post "/:lodge_id/remove-recipient" do
    %Plug.Conn{params: %{"lodge_id" => lodge_id, "userId" => user_id}} = conn

    lodge = Lodges.get_lodge_by_id(lodge_id)

    case Lodges.remove_recipient(lodge, user_id) do
      nil ->
        conn
        |> send_resp(200, Jason.encode!(%{success: false}))

      _ ->
        conn
        |> send_resp(200, Jason.encode!(%{success: true}))
    end
  end

  post "/:lodge_id/leave" do
    %Plug.Conn{params: %{"lodge_id" => lodge_id, "userId" => user_id}} = conn

    lodge = Lodges.get_lodge_by_id(lodge_id)

    case Lodges.leave_lodge(lodge, user_id) do
      nil ->
        conn
        |> send_resp(200, Jason.encode!(%{success: false}))

      _ ->
        conn
        |> send_resp(200, Jason.encode!(%{success: true}))
    end
  end

  post "/:lodge_id/send-message" do
    has_user_id = Map.has_key?(conn.assigns, :user_id)

    case has_user_id do
      true ->
        lodge_id = conn.params["lodgeId"]
        text = conn.body_params["text"]
        user_id = conn.assigns.user_id

        case Lodges.create_lodge_message(lodge_id, user_id, text) do
          {:ok, message} ->
            LodgeSession.broadcast_ws(lodge_id, %{op: "new_lodge_message", d: %{message: message}})

            conn
            |> send_resp(200, Jason.encode!(message))

          {:error, changeset_error} ->
            error = Spek.Utils.Errors.changeset_to_first_err_message(changeset_error)

            LodgeSession.broadcast_ws(lodge_id, %{op: "error", d: error})

            conn
            |> send_resp(200, Jason.encode!(%{error: error}))
        end

      false ->
        conn
        |> send_resp(401, Jason.encode!(%{error: "UNAUTHORIZED"}))
    end
  end

  get "/:lodge_id/messages" do
    has_user_id = Map.has_key?(conn.assigns, :user_id)

    case has_user_id do
      true ->
        lodge_id = conn.params["lodge_id"]
        cursor = String.to_integer(conn.params["cursor"])

        {messages, next_cursor} = Lodges.get_lodge_messages(lodge_id, cursor)

        conn
        |> send_resp(
          200,
          Jason.encode!(%{messages: messages, nextCursor: next_cursor, initial: cursor == 0})
        )

      false ->
        conn
        |> send_resp(401, Jason.encode!(%{error: "UNAUTHORIZED"}))
    end
  end

  match _ do
    conn
    |> send_resp(404, "Not found")
  end
end
