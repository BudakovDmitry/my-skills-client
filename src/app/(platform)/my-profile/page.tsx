'use client'

import ProfileCard from '@/components/blocks/ProfileCard/ProfileCard'
import Loader from '@/components/ui/Loader/Loader';
import { useMyProfile } from '@/hooks/useMyProfile';

const Profile = () => {
  const { data, isLoading } = useMyProfile()

  return (
    <div className='flex-1 flex flex-col items-center mt-2 mb-14'>
      {isLoading ? <Loader /> : <ProfileCard user={data?.data} isOnlyView={false} />}
    </div>
  )
}

export default Profile;