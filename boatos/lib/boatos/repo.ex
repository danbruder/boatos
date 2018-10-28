defmodule Boatos.Repo do
  use Ecto.Repo,
    otp_app: :boatos,
    adapter: Ecto.Adapters.Postgres
end
