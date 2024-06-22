'use client'

import { useState } from "react"
import { useMyProfile, chatService } from "@/shared/api"
import { useSearchParams } from 'next/navigation';
import { PAGE, QUERY_KEY, PERMISSION } from "@/shared/config"
import { checkingPermission } from "@/shared/utils"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { io } from 'socket.io-client';
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { IUser } from "@/types/types";

const socket = io('http://localhost:8000', {
  transports: ['websocket'],
});

export const useChatPage = () => {
  const searchParams = useSearchParams();
  const chatId = searchParams?.get('chatId') || '';
  const { data, isLoading } = useMyProfile()
  const [activeChat, setActiveChat] = useState<string | null>(chatId)
  const router = useRouter();
  const queryClient = useQueryClient()

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
    mutate({ userId: data?.data.id || '', chatId })
    setActiveChat(chatId)
  };

  return {
    myProfile: data?.data || {} as IUser,
    handleChatOpen,
    activeChat,
    isLoading
  }
}