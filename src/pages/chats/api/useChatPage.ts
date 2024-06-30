import { useState } from "react"
import { chatService, useChat } from "@/entities/chat"
import { useMyProfile } from "@/shared/api";
import { useSearchParams } from 'next/navigation';
import { PAGE, QUERY_KEY, PERMISSION } from "@/shared/config"
import { checkingPermission } from "@/shared/utils"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { io } from 'socket.io-client';
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { IUser } from "@/shared/model/types"

const socket = io('http://localhost:8000', {
  transports: ['websocket'],
});


export const useChatPage = () => {
  const { data, isLoading } = useMyProfile()
  const searchParams = useSearchParams();
  const chatId = searchParams?.get('chatId') || '';
  const [activeChat, setActiveChat] = useState<string>(chatId)
  const router = useRouter();
  const queryClient = useQueryClient()
  const { data: chatData, isLoading: isLoadingChat } = useChat(data?.data.id || '')

  useEffect(() => {
    if (isLoading || !data) return;

    if (!checkingPermission(data.data.plan.permissions, PERMISSION.SEND_MESSAGE)) {
      router.push(PAGE.HOME);
    }
  }, [isLoading, data, router]);


  const { mutate } = useMutation({
    mutationKey: [QUERY_KEY.CREATE_MESSAGE],
    mutationFn: (data: { userId: string, chatId: string }) => chatService.updateMessageReadSocket(data),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: [`${QUERY_KEY.GET_CHAT_BY_USER_ID}_${data?.data.id}`] })
    }
  })

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleChatOpen = (chatId: string) => {
    setActiveChat(chatId)
    mutate({ userId: data?.data.id || '', chatId })
    
    router.push(`${PAGE.CHATS}?chatId=${chatId}`)
  };

  return {
    currentProfile: data?.data || {} as IUser,
    handleChatOpen,
    activeChat,
    isLoading,
    chats: chatData?.data || {} as any,
    isLoadingChat
  }
}