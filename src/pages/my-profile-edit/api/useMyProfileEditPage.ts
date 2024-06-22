import { useMyProfile } from "@/shared/api"
import { IUser } from "@/types/types"

export const useMyProfileEditPage = () => {
  const { data, isLoading } = useMyProfile()

  return {
    myProfile: data?.data || {} as IUser, 
    isLoading
  }
}