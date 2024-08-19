defmodule Telescope.Mutations.Messages do
  alias Telescope.Schemas.Message
  alias Telescope.Repo

  def create_thread_message(data) do
    Message.changeset(%Message{
      text: data["text"],
      threadId: data["threadId"],
      userId: data["userId"]
    })
    |> Repo.insert!(returning: true)
    |> Repo.preload(:user)
  end

  def delete_thread_message_by_id(message_id) do
    %Message{id: message_id} |> Repo.delete()
  end
end
