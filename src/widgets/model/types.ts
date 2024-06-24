import { IUser, IUserLinks } from "@/types/types"

export type ProfileCardPropsType = {
  user: IUser
  isOnlyView?: boolean
}

export type SocialLinksProps = {
  links: IUserLinks
}
