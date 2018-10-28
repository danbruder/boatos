defmodule BoatosWeb.Router do
  use BoatosWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", BoatosWeb do
    pipe_through :api
  end
end
