import Loader from "@/components/ui/Loader/Loader"
import { useChat } from "@/hooks/useChat"
import { IUser } from "@/types/types"
import Image from "next/image"
import { isPremiumUserPlan } from "@/helpers/helpers"

type ChatListProps = {
  user: IUser
  activeChat: string | null
  handleChatOpen: (chatId: string) => void
}

const ChatList = ({ user, activeChat, handleChatOpen }: ChatListProps) => {
  const { data, isLoading } = useChat(user.id)

  function countUnreadMessagesFromOtherUsers(messages: any[], currentUserId: string): number {
    const unreadMessages = messages.filter(message => !message.read && message.userId !== currentUserId);
    return unreadMessages.length;
  }


  if (isLoading || !data) {
    return (
      <Loader />
    )
  }

  return (
    <div className="flex flex-col mt-6 pb-8 pl-6 pr-4 w-80 bg-white flex-shrink-0 shadow-xl">
      <div className="flex flex-row items-center justify-center h-12 w-full bg-sky-100 rounded-md">
        <div
          className="flex items-center justify-center rounded-2xl text-sky-700 bg-sky-100 h-10 w-10"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            ></path>
          </svg>
        </div>
        <div className="font-bold text-xl">Chats</div>
      </div>
      <div className="flex flex-col mt-8">
        <div className="flex flex-row items-center justify-between text-xs">
          <p className="font-bold text-md">Actual Chats</p>
          <p
            className="flex items-center justify-center bg-sky-700 h-5 w-5 rounded-md text-md font-bold text-white"
          >{data?.data.length}</p>
        </div>
        <div className="flex flex-col space-y-1 mt-4 -mx-2 h-full overflow-y-auto">
          {data?.data.map((chatItem: any) => <button
            key={chatItem.id}
            onClick={() => handleChatOpen(chatItem.id)}
            className={`flex flex-row items-center hover:bg-gray-200 rounded-xl p-2 ${chatItem.id === activeChat ? 'bg-gray-100' : ''}`}
          >
            <div
              className={`flex items-center justify-center h-8 w-8 bg-sky-200 rounded-lg text-sky-800 font-bold overflow-hidden border-2 border-white shadow-md ${isPremiumUserPlan(chatItem.users[0].user.plan.name) ? 'border-orange-500' : ''}`}
            >
              {chatItem.users[0].user.photo ? <Image className="w-full h-full object-cover" src={chatItem.users[0].user.photo} alt='Photo' width={20} height={20} /> : chatItem.users[0].user.firstName[0]}
            </div>
            <div className="ml-2 text-sm font-semibold">{`${chatItem.users[0].user.firstName} ${chatItem.users[0].user.lastName}`}</div>
            {countUnreadMessagesFromOtherUsers(data.data[0].messages, user.id) > 0
              ? (
                <span className="ml-auto mr-2 bg-orange-500 text-white font-bold w-6 h-6 flex items-center justify-center rounded-full text-xs">{countUnreadMessagesFromOtherUsers(data.data[0].messages, user.id)}</span>
              )
              : null}
          </button>)}
        </div>
      </div>
    </div>
  )
}

export default ChatList