import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "@/config/query-key.config";
import { chatService } from "@/services/chat.service";

export const useChat = (userId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [`${QUERY_KEY.GET_CHAT_BY_USER_ID}_${userId}`],
    queryFn: () => chatService.getChatByUserId(userId),
  })

  return { data, isLoading }
}

export const useChatById = (chatId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [`${QUERY_KEY.GET_CHAT_BY_ID}_${chatId}`],
    queryFn: () => chatService.getChatById(chatId),
  })

  return { data, isLoading }
}