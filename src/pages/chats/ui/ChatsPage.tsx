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
    <div className='flex-1 flex'>
      <div className="flex flex-1 antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <ChatList user={myProfile} activeChat={activeChat} handleChatOpen={handleChatOpen} />
          <MessagesBlock activeChat={activeChat} />
        </div>
      </div>
    </div>
  )
}

export default ChatsPage