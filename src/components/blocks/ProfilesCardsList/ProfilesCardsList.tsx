'use client'

import { useAllUsers } from "@/hooks/useAllUsers"
import ProfilesCard from "../ProfilesCard/ProfilesCard"
import { IUser } from "@/types/types"
import { Loader, Pagination } from "@/shared/ui"
import { useState } from "react"
import { useRouter } from "next/navigation";
import { PERMISSION, PAGE } from "@/shared/config"
import { useMyProfile } from "@/hooks/useMyProfile"
import { checkingPermission } from "@/helpers/helpers"

const ProfilesCardsList = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = useAllUsers({ pageNumber: page })
  const { data: profileData, isLoading: isLoadingProfile } = useMyProfile()
  const router = useRouter();

  const handleChangePage = (event: any, value: number) => {
    setPage(value);
  };

  if (isLoading || isLoadingProfile || !profileData) {
    return (
      <div className="flex-1 flex items-center">
        <Loader />
      </div>
    )
  }

  if (!checkingPermission(profileData.data.plan.permissions, PERMISSION.VIEW_ALL_PROFILES)) {
    router.push(PAGE.HOME)
  }

  return (
    <>
      {data?.data.users.map((user: IUser) => <ProfilesCard key={user.id} user={user} />)}
      <Pagination page={page} handleChangePage={handleChangePage} totalPages={data?.data.totalPages} />
    </>
  )
}

export default ProfilesCardsList