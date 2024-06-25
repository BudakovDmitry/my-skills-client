import { useMyProfile } from "@/entities/user"
import { IUser } from "@/shared/model/types"

export const useMyProfilePage = () => {
  const { data, isLoading } = useMyProfile()

  return {
    user: data?.data || {} as IUser,
    isLoading
  }
}
