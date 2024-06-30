import { IUser } from "@/shared/model/types"

export type MessagesBlockProps = {
  currentProfile: IUser
  activeChat: string
}

export type MessageProps = {
  isCurrentProfile: boolean
  message: any
}

