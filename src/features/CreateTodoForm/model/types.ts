import { ITodo } from "@/entities/todo/model/types"

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

export type CreateTodoFromProps = {
  userId: string,
}
