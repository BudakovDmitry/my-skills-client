'use client'

import { ProfileCard } from "@/widgets/ProfileCard";
import { Loader } from "@/shared/ui"
import { useUser } from "@/shared/api";

const ProfilePage = ({ slug }: { slug: string }) => {
  const { data, isLoading } = useUser(slug)

  if (isLoading) {
    return (<Loader />)
  }

  return (
    <div className='flex-1 flex flex-col items-center mt-2 mb-14'>
      {data ? <ProfileCard user={data.data} isOnlyView /> : null}
    </div>
  )
}

export default ProfilePage;