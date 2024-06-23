export interface ICreateTodoForm {
  name: string
}

export interface ICreateTodo extends ICreateTodoForm {
  userId: string
}