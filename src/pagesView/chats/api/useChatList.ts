import { useChat } from "@/entities/chat"

export const useChatList = (userId: string) => {
  const { data, isLoading } = useChat(userId)

  function countUnreadMessagesFromOtherUsers(messages: any[], currentUserId: string): number {
    const unreadMessages = messages.filter(message => !message.read && message.userId !== currentUserId);
    return unreadMessages.length;
  }

  return {
    chats: data?.data,
    isLoading,
    countUnreadMessagesFromOtherUsers
  }
}