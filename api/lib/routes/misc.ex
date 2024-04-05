defmodule Routes.Misc do
  alias Operations.Channels
  alias Operations.Users
  alias Operations.Communities
  use Plug.Router

  plug(Plugs.CheckAuth, %{shouldThrow: false})
  plug(:match)
  plug(:dispatch)

  get "/search" do
    %Plug.Conn{params: %{"query" => query}} = conn

    communities = Communities.search_name(query)
    threads = Channels.search_thread_name(query)
    users = Users.search_username(query)
    items_1 = Enum.concat(communities, users)
    items = Enum.concat(items_1, threads)

    conn
    |> send_resp(
      200,
      Jason.encode!(%{items: items, communities: communities, threads: threads, users: users})
    )
  end

  match _ do
    conn
    |> send_resp(404, "not found")
  end
end
