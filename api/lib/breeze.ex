defmodule Breeze do
  use Plug.Router

  alias Breeze.Routes
  alias Breeze.Plugs

  plug(Plugs.Cors)
  plug(Spek.Metrics.PrometheusExporter)
  plug(:match)
  plug(Plug.Static, at: "/public", from: "/media")

  plug(Plug.Parsers,
    parsers: [:urlencoded, :multipart, :json],
    pass: ["*/*"],
    json_decoder: Jason
  )

  plug(:dispatch)

  options _ do
    send_resp(conn, 200, "")
  end

  forward("/dev", to: Routes.DevOnly)
  forward("/auth", to: Routes.OAuth)
  forward("/api/health-check", to: Routes.HealthCheck)

  # API V1 Routes
  forward("/api/v1/communities", to: Routes.V1.Communities)
  forward("/api/v1/channels", to: Routes.V1.Channels)
  forward("/api/v1/users", to: Routes.V1.Users)
  forward("/api/v1/threads", to: Routes.V1.Threads)
  forward("/api/v1/admins", to: Routes.V1.Metrics)
  forward("/api/v1/lodges", to: Routes.V1.Lodges)
  forward("/api/v1/confs", to: Routes.V1.Confs)

  forward("/misc", to: Routes.Misc)
  forward("/api/public", to: Routes.Public)

  match _ do
    conn
    |> send_resp(404, "Not found")
  end
end
