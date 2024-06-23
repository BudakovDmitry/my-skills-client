import { useAllUsers, useMyProfile } from "@/entities/user/api"
import { useState } from "react"
import { useRouter } from "next/navigation";
import { PERMISSION, PAGE } from "@/shared/config"
import { checkingPermission } from "@/shared/utils"
import { IUser } from "@/types/types";

export const useProfileCardList = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = useAllUsers({ pageNumber: page })
  const { data: profileData, isLoading: isLoadingProfile } = useMyProfile()
  const router = useRouter();

  const handleChangePage = (event: any, value: number) => {
    setPage(value);
  };

  if (profileData && !checkingPermission(profileData.data.plan.permissions, PERMISSION.VIEW_ALL_PROFILES)) {
    router.push(PAGE.HOME)
  }
  
  return {
    users: data?.data.users || [] as IUser[],
    totalPages: data?.data.totalPages,
    profileData,
    handleChangePage,
    isLoading,
    isLoadingProfile,
    page
  }
}