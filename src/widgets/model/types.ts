import { ITodo, IUser, IUserLinks } from "@/types/types"

export type ProfileCardPropsType = {
  user: IUser
  isOnlyView?: boolean
}

export type SocialLinksProps = {
  links: IUserLinks
}

export type CreateTodoFromProps = {
  userId: string,
}

export type TodoItemProps = {
  todo: ITodo,
  isOnlyView?: boolean,
  hasCustomizationTodoPermission: boolean
}