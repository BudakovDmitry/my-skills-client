import { useChatById } from "@/entities/chat"
import { useMyProfile } from "@/shared/api";
import { useRef } from "react"

export const useMessagesBlock = (activeChat: string = '') => {
  const { data: chatData, isLoading: isLoadingChat } = useChatById(activeChat)
  const { data: currentProfile, isLoading: isLoadingCurrentProfile } = useMyProfile()
  const lastElementRef = useRef<HTMLDivElement>(null);

  const handleScrollToNewMessage = () => {
    if (lastElementRef.current) {
      lastElementRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  return {
    chatData,
    isLoadingChat,
    currentProfile,
    isLoadingCurrentProfile,
    handleScrollToNewMessage,
    lastElementRef
  }
}