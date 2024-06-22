import { useMyProfile, usePageLink } from "@/shared/api";

export const useHeader = () => {
  const { data: profileData, isLoading: isProfileLoading } = useMyProfile()
  const { data: pageLinkData } = usePageLink()

  return {
    profileData,
    isProfileLoading,
    pageLinkData
  }
}