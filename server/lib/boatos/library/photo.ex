defmodule Boatos.Library.Photo do
  use Ecto.Schema
  import Ecto.Changeset


  schema "photos" do
    field :description, :string
    field :url, :string

    timestamps()
  end

  @doc false
  def changeset(photo, attrs) do
    photo
    |> cast(attrs, [:url, :description])
    |> validate_required([:url, :description])
  end
end
