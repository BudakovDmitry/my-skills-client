export interface ILogin {
  email: string
  password: string
}

export interface IRegistration {
  email: string
  firstName: string
  lastName: string
  password: string
  passwordRepeat: string
}

export interface IUserEdit {
  email: string
  firstName: string
  lastName: string
  work?: string
  location?: string
  photo?: string
  description?: string
  links: IUserLinks
}

export interface IUserLinks {
  instagram?: string
  facebook?: string
  github?: string
  linkedIn?: string
}

export interface IUser {
  id: string
  createdAt: Date
  updatedAt: Date

  email: string
  firstName: string
  lastName: string
  work?: string
  location?: string
  photo?: string
  description?: string
  links?: ISocialLinks
  todos?: ITodo[]
}

export interface IAuthResponse {
  accessToken: string
  user: IUser
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
}

export interface ISocialLinks {
  id: string
  createdAt: Date
  updatedAt: Date

  instagram?: string
  facebook?: string
  github?: string
  linkedIn?: string
  user: IUser
  userId: string
}

export interface ICreateTodoForm {
  name: string
}

export interface ICreateTodo extends ICreateTodoForm {
  userId: string
}

export interface IPage {
  id: string
  createdAt: Date
  updatedAt: Date

  title: string
  content: string
}

export interface IPageLink {
  id: string
  createdAt: Date
  updatedAt: Date

  name: string
  link: string
  order: number
  isButton: boolean
}