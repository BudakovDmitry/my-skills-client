'use client'

import { useAllUsers } from "@/hooks/useAllUsers"
import ProfilesCard from "../ProfilesCard/ProfilesCard"
import { IUser } from "@/types/types"
import Loader from "@/components/ui/Loader/Loader"

const ProfilesCardsList = () => {
  const { data, isLoading } = useAllUsers()

  if (isLoading) {
    return (<Loader />)
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