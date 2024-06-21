'use client'

import ProfileCard from '@/components/blocks/ProfileCard/ProfileCard'
import { Loader } from "@/shared/ui"
import { useMyProfile } from '@/hooks/useMyProfile';

const MyProfilePage = () => {
  const { data, isLoading } = useMyProfile()

  return (
    <div className='flex-1 flex flex-col items-center mt-2 mb-14'>
      {isLoading || !data ? <Loader /> : <ProfileCard user={data.data} isOnlyView={false} />}
    </div>
  )
}

export default MyProfilePage;