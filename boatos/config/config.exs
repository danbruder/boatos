# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :boatos,
  ecto_repos: [Boatos.Repo]

# Configures the endpoint
config :boatos, BoatosWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "KlKY4VFBSLKdX63c/Fh9WZ6M6YIOXeN947GIkxEyFzv3pr+i0beEcEuxrAFD4A06",
  render_errors: [view: BoatosWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: Boatos.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix and Ecto
config :phoenix, :json_library, Jason
config :ecto, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
