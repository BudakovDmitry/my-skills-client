'use client'

import { CreateMessageForm } from "@/features/CreateMessageForm"
import Message from "./Message"

import { MessagesBlockProps } from "../model/types"
import { useMessagesBlock } from "../api/useMessagesBlock"
import { Loader } from "@/shared/ui"

const MessagesBlock = ({ activeChat, currentProfile }: MessagesBlockProps) => {
  const {
    chatData,
    isLoadingChat
  } = useMessagesBlock(activeChat)

  if (isLoadingChat) {
    return (
      <Loader />
    )
  }

  return (
    <div className="flex flex-col flex-auto h-full px-6 pt-6">
      <div
        className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
      >
        <div className="flex flex-col h-full overflow-y-auto mb-4">

          {chatData?.data.messages.length ? (
            <div className="flex flex-col h-36">
              <div className="grid grid-cols-12 gap-y-2">
                {chatData?.data.messages.map((message: any, index: number) => <Message
                  key={message.id}
                  isCurrentProfile={message.userId === currentProfile.id}
                  message={message}
                />)}
              </div>
            </div>
          )
            : <div className="flex-1 flex items-center justify-center font-medium">Повідомлень ще немає</div>}
        </div>
        <CreateMessageForm chatId={activeChat} />
      </div>

    </div>
  )
}

export default MessagesBlock