import { useChatById } from "@/entities/chat"

export const useMessagesBlock = (activeChat: string) => {
  const { data: chatData, isLoading: isLoadingChat } = useChatById(activeChat)

  return {
    chatData,
    isLoadingChat
  }
}