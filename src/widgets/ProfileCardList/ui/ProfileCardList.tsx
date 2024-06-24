'use client'

import { ProfilesCard } from "@/widgets/ProfilesCard"
import { IUser } from "@/types/types"
import { Loader, Pagination } from "@/shared/ui"
import { useProfileCardList } from "../api/useProfileCardList"

const ProfileCardList = () => {
  const {
    users,
    totalPages,
    isLoading,
    isLoadingProfile,
    profileData,
    handleChangePage,
    page
  } = useProfileCardList()

  if (isLoading || isLoadingProfile || !profileData) {
    return (
      <Loader />
    )
  }

  return (
    <>
      {users.map((user: IUser) => <ProfilesCard key={user.id} user={user} />)}
      <Pagination page={page} handleChangePage={handleChangePage} totalPages={totalPages} />
    </>
  )
}

export default ProfileCardList