import { usePageLink } from "@/entities/page-link/api";
import { useMyProfile } from "@/entities/user/api";

export const useHeader = () => {
  const { data: profileData, isLoading: isProfileLoading } = useMyProfile()
  const { data: pageLinkData } = usePageLink()

  return {
    profileData,
    isProfileLoading,
    pageLinkData
  }
}