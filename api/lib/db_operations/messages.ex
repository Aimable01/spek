defmodule Operations.Messages do
  # ACCESS
  defdelegate get_thread_messages(threadId), to: Operations.Access.Messages

  # MUTATIONS
  defdelegate create_thread_message(data), to: Operations.Mutations.Messages
end
