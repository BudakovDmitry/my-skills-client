'use client'

import { ProfileMiniCard } from "@/widgets/ProfileMiniCard"
import { IUser } from "@/shared/model/types"

const ProfileCardList = ({ users }: { users: IUser[] }) => {

  return (
    <>
      {users.map((user: IUser) => <ProfileMiniCard key={user.id} user={user} />)}
    </>
  )
}

export default ProfileCardList