defmodule Boatos.LibraryTest do
  use Boatos.DataCase

  alias Boatos.Library

  describe "photos" do
    alias Boatos.Library.Photo

    @valid_attrs %{description: "some description", url: "some url"}
    @update_attrs %{description: "some updated description", url: "some updated url"}
    @invalid_attrs %{description: nil, url: nil}

    def photo_fixture(attrs \\ %{}) do
      {:ok, photo} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Library.create_photo()

      photo
    end

    test "list_photos/0 returns all photos" do
      photo = photo_fixture()
      assert Library.list_photos() == [photo]
    end

    test "get_photo!/1 returns the photo with given id" do
      photo = photo_fixture()
      assert Library.get_photo!(photo.id) == photo
    end

    test "create_photo/1 with valid data creates a photo" do
      assert {:ok, %Photo{} = photo} = Library.create_photo(@valid_attrs)
      assert photo.description == "some description"
      assert photo.url == "some url"
    end

    test "create_photo/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Library.create_photo(@invalid_attrs)
    end

    test "update_photo/2 with valid data updates the photo" do
      photo = photo_fixture()
      assert {:ok, %Photo{} = photo} = Library.update_photo(photo, @update_attrs)

      
      assert photo.description == "some updated description"
      assert photo.url == "some updated url"
    end

    test "update_photo/2 with invalid data returns error changeset" do
      photo = photo_fixture()
      assert {:error, %Ecto.Changeset{}} = Library.update_photo(photo, @invalid_attrs)
      assert photo == Library.get_photo!(photo.id)
    end

    test "delete_photo/1 deletes the photo" do
      photo = photo_fixture()
      assert {:ok, %Photo{}} = Library.delete_photo(photo)
      assert_raise Ecto.NoResultsError, fn -> Library.get_photo!(photo.id) end
    end

    test "change_photo/1 returns a photo changeset" do
      photo = photo_fixture()
      assert %Ecto.Changeset{} = Library.change_photo(photo)
    end
  end
end
