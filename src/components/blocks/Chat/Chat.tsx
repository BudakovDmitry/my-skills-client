'use client'

import { useState } from "react"
import MessagesBlock from "../MessagesBlock/MessagesBlock"
import { useMyProfile, chatService } from "@/shared/api"
import ChatList from "../ChatsList/ChatList"
import { Loader } from "@/shared/ui"
import { useSearchParams } from 'next/navigation';
import { PAGE, QUERY_KEY, PERMISSION } from "@/shared/config"
import { checkingPermission } from "@/shared/utils"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { io } from 'socket.io-client';
import { useMutation, useQueryClient } from "@tanstack/react-query"

const socket = io('http://localhost:8000', {
  transports: ['websocket'],
});


const Chat = () => {
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

  if (isLoading || !data) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <Loader />
      </div>
    )
  }


  const handleChatOpen = (chatId: string) => {
    mutate({ userId: data.data.id, chatId })
    setActiveChat(chatId)
  };

  return (
    <div className="flex flex-1 antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <ChatList user={data.data} activeChat={activeChat} handleChatOpen={handleChatOpen} />
        <MessagesBlock activeChat={activeChat} />
      </div>
    </div>
  )
}

export default Chat