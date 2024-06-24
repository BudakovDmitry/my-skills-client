import { IUser } from "@/types/types"

export interface ICreateTodoForm {
  name: string
}

export interface ICreateTodo extends ICreateTodoForm {
  userId: string
}

export type TodoItemProps = {
  todo: ITodo,
  isOnlyView?: boolean,
  hasCustomizationTodoPermission: boolean
}

export interface ITodo {
  id: string
  createdAt: Date
  updatedAt: Date

  name: string
  description?: string
  status: boolean
  sticker?: string
  user: IUser
  userId: string
  color: string
}

export type CreateTodoFromProps = {
  userId: string,
}
