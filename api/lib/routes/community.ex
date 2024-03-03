defmodule Routes.Community do
  use Plug.Router

  alias Operations.Users

  plug(:match)
  plug(Plugs.CheckAuth, %{shouldThrow: false})
  plug(:dispatch)

  get "/" do
    IO.inspect(conn.assigns.user_id)
    send_resp(conn, 200, "hello")
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

      community = Operations.Communities.create_community(data)

      conn
      |> send_resp(200, Jason.encode!(community))
    else
      conn
      |> send_resp(402, "UNAUTHORIZED")
    end
  end

  match _ do
    conn
    |> send_resp(404, "Not found")
  end
end
