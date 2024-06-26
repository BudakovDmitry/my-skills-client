import { useAllUsers, useMyProfile } from "@/shared/api";
import { IUser } from "@/shared/model/types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PERMISSION, PAGE } from "@/shared/config"
import { checkingPermission } from "@/shared/utils"

export const useProfilesPage = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = useAllUsers({ pageNumber: page })
  const { data: profileData, isLoading: isLoadingProfile } = useMyProfile()
  const router = useRouter();

  if (profileData && !checkingPermission(profileData.data.plan.permissions, PERMISSION.VIEW_ALL_PROFILES)) {
    router.push(PAGE.HOME)
  }
  
  return {
    page, 
    setPage,
    isLoading,
    users: data?.data.users || [] as IUser[],
    totalPages: data?.data.totalPages || 1,
  }
}