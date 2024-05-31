'use client'

import ProfileCard from '@/components/blocks/ProfileCard/ProfileCard'
import { useMyProfile } from '@/hooks/useMyProfile';
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Мій профіль',
//   description: 'Мій профіль',
// };

const Profile = () => {
  const { data, isLoading } = useMyProfile()

  return (
    <div className='flex-1 flex flex-col items-center mt-2 mb-14'>
      {isLoading ? 'Loading...' : <ProfileCard user={data?.data} isOnlyView={false} />}
    </div>
  )
}

export default Profile;