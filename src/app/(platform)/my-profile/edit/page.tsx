'use client'

import ProfileEditForm from "@/components/forms/ProfileEditForm/ProfileEditForm"
import { useMyProfile } from "@/hooks/useMyProfile"

const ProfileEdit = () => {
  const { data, isLoading } = useMyProfile()

  return (
    <div className="flex-1 flex flex-col items-center">
      {isLoading ? 'Loading...' : data ? <ProfileEditForm user={data} /> : null}
    </div>
  )
}

export default ProfileEdit 