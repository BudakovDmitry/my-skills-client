'use client'

import { useAllUsers } from "@/hooks/useAllUsers"
import ProfilesCard from "../ProfilesCard/ProfilesCard"
import { IUser } from "@/types/auth.types"

const ProfilesCardsList = () => {
  const { data, isLoading } = useAllUsers()

  if (isLoading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  if (data) {
    return (
      <>
        {data.data.map((user: IUser) => <ProfilesCard key={user.id} user={user} /> )}
      </>
    )
  }

  return (
    <p>Щось сталося...</p>
  )

}

export default ProfilesCardsList