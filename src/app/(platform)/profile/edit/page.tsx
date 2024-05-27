'use client'

import ProfileEditForm from "@/components/forms/ProfileEditForm/ProfileEditForm"
import { useProfile } from "@/hooks/useProfile"

const ProfileEdit = () => {
  const { data, isLoading } = useProfile()

  return (
    <div className="flex-1 flex flex-col items-center">
      {isLoading ? 'Loading...' : data ? <ProfileEditForm user={data} /> : null}
    </div>
  )
}

export default ProfileEdit 