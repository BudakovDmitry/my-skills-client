import { IUser } from "@/shared/model/types"

export type ChatListProps = {
  user: IUser
  chats: any
  activeChat: string | null
  handleChatOpen: (chatId: string) => void
}