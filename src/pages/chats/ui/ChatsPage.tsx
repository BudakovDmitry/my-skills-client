'use client'

import { ChatList } from "@/widgets/ChatList"
import MessagesBlock from "./MessagesBlock"
import { useChatPage } from "../api/useChatPage"
import { Loader } from "@/shared/ui"
import Image from "next/image"
import arrow from '@/../public/arrow-down.png'

const ChatsPage = () => {
  const {
    currentProfile,
    handleChatOpen,
    isLoading,
    activeChat,
    chats,
    isLoadingChat
  } = useChatPage()

  if (isLoading || isLoadingChat) {
    return (
      <Loader />
    )
  }

  return (
    <div className='flex'>
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <ChatList user={currentProfile} chats={chats} activeChat={activeChat} handleChatOpen={handleChatOpen} />
        {
          activeChat
            ? <MessagesBlock currentProfile={currentProfile} activeChat={activeChat} />
            : (
              <div className="flex flex-col flex-auto h-full px-6 pt-6">
                <div className="hidden lg:block relative mt-2 -ml-6 w-32">
                  <Image src={arrow} alt="Arrow" className="rotate-90 w-32" />
                  <p className="absolute top-0 -right-20 font-bold italic">Оберіть чат</p>
                </div>
              </div>
            )
        }
      </div>
    </div>
  )
}

export default ChatsPage