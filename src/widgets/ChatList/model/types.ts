import { IUser } from "@/shared/model/types"

export type ChatListProps = {
  user: IUser
  activeChat: string | null
  handleChatOpen: (chatId: string) => void
}