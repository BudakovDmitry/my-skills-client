'use client'

import ProfileEditForm from "@/components/forms/ProfileEditForm/ProfileEditForm"
import Loader from "@/components/ui/Loader/Loader"
import { useMyProfile } from "@/hooks/useMyProfile"

const ProfileEdit = () => {
  const { data, isLoading } = useMyProfile()

  return (
    <div className="flex-1 flex flex-col items-center">
      {isLoading ? <Loader /> : data ? <ProfileEditForm user={data?.data} /> : null}
    </div>
  )
}

export default ProfileEdit 