defmodule Boatos.Repo.Migrations.CreatePhotos do
  use Ecto.Migration

  def change do
    create table(:photos) do
      add :url, :string
      add :description, :string

      timestamps()
    end

  end
end
