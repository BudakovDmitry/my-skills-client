import { useRouter } from "next/navigation"
import { PAGE } from "@/shared/config"

export const useMessage = () => {
  const router = useRouter();

  const handleOpenUserProfile = (userId: string) => {
    router.push(`${PAGE.PROFILES}/${userId}`)
  }

  return {
    handleOpenUserProfile
  }
}