import { useMyProfile } from "@/entities/user/api"
import { IUser } from "@/types/types"

export const useMyProfilePage = () => {
  const { data, isLoading } = useMyProfile()

  return {
    user: data?.data || {} as IUser,
    isLoading
  }
}
