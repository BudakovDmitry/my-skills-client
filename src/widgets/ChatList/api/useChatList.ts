import { useChat } from "@/entities/chat"

export const useChatList = () => {
  function countUnreadMessagesFromOtherUsers(messages: any[], currentUserId: string): number {
    const unreadMessages = messages.filter(message => !message.read && message.userId !== currentUserId);
    return unreadMessages.length;
  }

  return {
    countUnreadMessagesFromOtherUsers
  }
}