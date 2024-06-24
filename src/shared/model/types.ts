import { AxiosResponse } from 'axios';
import { ITodo } from "@/entities/todo/model/types"

export type MenuSimplePropsType = {
  user: IUser
}

export type SwipeableTemporaryDrawerProps = {
  profileData?: AxiosResponse<IUser, any>
  pageLinkData?: AxiosResponse<IPageLink[], any>
}

export type MenuItemProps = {
  item: IPageLink
  hasPermission: boolean
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
  commentsReceived?: IComment[]
  role: IRole
  plan: IPlan
}

export interface IRole {
  id: string
  createdAt: Date
  updatedAt: Date

  name: string
}

export interface IPlan {
  id: string
  createdAt: Date
  updatedAt: Date

  name: string
  permissions: IPermission[]
}

export interface IPermission {
  id: string
  createdAt: Date
  updatedAt: Date

  name: string
  value: boolean
}

export interface IAuthResponse {
  accessToken: string
  user: IUser
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

export interface ICreateCommentContent {
  text: string
}

export interface ICreateComment extends ICreateCommentContent {
  authorId: string
  recipientId: string
}

export interface IComment extends ICreateComment {
  id: string
  createdAt: string
  updatedAt: string

  author: IAuthorComment
}

export interface IAuthorComment {
  firstName: string
  lastName: string
  photo: string
}

export interface IAllUsersResponse {
  users: IUser[],
  totalPages: number
}

export interface ICreateMessageContent {
  content: string
}

export interface ICreateMessage extends ICreateMessageContent {
  userId: string
  chatId: string
}

export interface IUpdatePlan {
  planName: string
}

export type PlanName = 'BASIC' | 'PREMIUM' | 'ULTIMATE';