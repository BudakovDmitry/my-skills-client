'use client'

import { useState } from "react"
import MessagesBlock from "../MessagesBlock/MessagesBlock"
import { useMyProfile } from "@/hooks/useMyProfile"
import ChatList from "../ChatsList/ChatList"
import Loader from "@/components/ui/Loader/Loader"
import { useSearchParams } from 'next/navigation';
import { PAGE } from "@/config/pages-url.config"
import { checkingPermission } from "@/helpers/helpers"
import { PERMISSION } from "@/utils/permissions"
import { useRouter } from "next/navigation";


const Chat = () => {
  const searchParams = useSearchParams();
  const chatId = searchParams.get('chatId');
  const { data, isLoading } = useMyProfile()
  const [activeChat, setActiveChat] = useState<string | null>(chatId)
  const router = useRouter();

  if (isLoading || !data) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <Loader />
      </div>
    )
  }

  if (!checkingPermission(data.data.plan.permissions, PERMISSION.SEND_MESSAGE)) {
    router.push(PAGE.HOME)
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