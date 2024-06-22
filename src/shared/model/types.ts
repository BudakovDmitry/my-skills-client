import { IPageLink, IUser } from "@/types/types"
import { AxiosResponse } from 'axios';

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