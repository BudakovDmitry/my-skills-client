import { IUser } from "@/shared/model/types"

export type ChatListProps = {
  user: IUser
  activeChat: string | null
  handleChatOpen: (chatId: string) => void
}

export type MessagesBlockProps = {
  activeChat: string
}

export type MessageProps = {
  isCurrentProfile: boolean
  message: any
}

export type AddMessageFormProps = {
  chatId: string
  handleScrollToNewMessage: () => void
}