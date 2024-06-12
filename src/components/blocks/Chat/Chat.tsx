'use client'

import { useState } from "react"
import MessagesBlock from "../MessagesBlock/MessagesBlock"
import { useMyProfile } from "@/hooks/useMyProfile"
import ChatList from "../ChatsList/ChatList"
import Loader from "@/components/ui/Loader/Loader"
import { useSearchParams } from 'next/navigation';


const Chat = () => {
  const searchParams = useSearchParams();
  const chatId = searchParams.get('chatId');
  const { data, isLoading } = useMyProfile()
  const [activeChat, setActiveChat] = useState<string | null>(chatId)

  if (isLoading || !data) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <Loader />
      </div>
    )
  }

  return (
    <div className="flex flex-1 antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <ChatList user={data.data} activeChat={activeChat} setActiveChat={setActiveChat} />
        <MessagesBlock activeChat={activeChat} />
      </div>
    </div>
  )
}

export default Chat