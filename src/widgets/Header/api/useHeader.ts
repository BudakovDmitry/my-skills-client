import { usePageLink } from "@/entities/page-link";
import { useMyProfile } from "@/entities/user";

export const useHeader = () => {
  const { data: profileData, isLoading: isProfileLoading } = useMyProfile()
  const { data: pageLinkData } = usePageLink()

  return {
    profileData,
    isProfileLoading,
    pageLinkData
  }
}