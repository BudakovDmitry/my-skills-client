'use client'

import { ChatList } from "@/widgets/ChatList"
import MessagesBlock from "./MessagesBlock"
import { useChatPage } from "../api/useChatPage"
import { Loader } from "@/shared/ui"

const ChatsPage = () => {
  const {
    myProfile,
    handleChatOpen,
    activeChat,
    isLoading
  } = useChatPage()

  if (isLoading) {
    return (
      <Loader />
    )
  }

  return (
    <div className='flex'>
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <ChatList user={myProfile} activeChat={activeChat} handleChatOpen={handleChatOpen} />
        <MessagesBlock activeChat={activeChat} />
      </div>
    </div>
  )
}

export default ChatsPage