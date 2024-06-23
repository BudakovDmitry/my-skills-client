import { IUserLinks } from "@/types/types"

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

export type AllUsersParams = {
  pageNumber?: number;
  pageSize?: number;
}