import AddMessageForm from "@/components/forms/AddMessageForm/AddMessageForm"
import { useChatById } from "@/hooks/useChat"
import { useMyProfile } from "@/hooks/useMyProfile"
import Message from "../Message/Message"
import Image from "next/image"

import arrow from '@/../public/arrow-down.png'
import { useRef } from "react"

type MessagesBlockProps = {
  activeChat: string | null
}

const MessagesBlock = ({ activeChat }: MessagesBlockProps) => {
  const { data: chatData, isLoading: isLoadingChat } = useChatById(activeChat || '1')
  const { data: currentProfile, isLoading: isLoadingCurrentProfile } = useMyProfile()
  const lastElementRef = useRef<HTMLDivElement>(null);

  const handleScrollToNewMessage = () => {
    if (lastElementRef.current) {
      lastElementRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  return (
    <div className="flex flex-col flex-auto h-full p-6">
      {activeChat
        ? <div
          className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
        >
          <div className="flex flex-col h-full overflow-y-auto mb-4">

            {chatData?.data.messages.length ? (
              <div className="flex flex-col h-36">
                <div className="grid grid-cols-12 gap-y-2">
                  {chatData?.data.messages.map((message: any, index: number) => <Message
                    key={message.id}
                    ref={index === chatData.data.messages.length - 1 ? lastElementRef : undefined}
                    isCurrentProfile={message.userId === currentProfile?.data.id}
                    message={message}
                  />)}
                </div>
              </div>
            )
              : <div className="flex-1 flex items-center justify-center font-medium">Повідомлень ще немає</div>}


          </div>
          <AddMessageForm chatId={activeChat} handleScrollToNewMessage={handleScrollToNewMessage} />
        </div>
        : <div className="hidden lg:block relative mt-2 -ml-6 w-32">
          <Image src={arrow} alt="Arrow" className="rotate-90 w-32" />
          <p className="absolute top-0 -right-20 font-bold italic">Оберіть чат</p>
        </div>
      }
    </div>
  )
}

export default MessagesBlock