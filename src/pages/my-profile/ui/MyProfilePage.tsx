'use client'

import { Loader } from '@/shared/ui';
import { useMyProfilePage } from '../api/useMyProfilePage';
import { ProfileCard } from '@/widgets/ProfileCard';

const MyProfilePage = () => {
  const { user, isLoading } = useMyProfilePage()

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className='flex-1 flex flex-col items-center mt-2 mb-14'>
      <ProfileCard user={user} isOnlyView={false} />
    </div>
  )
}

export default MyProfilePage;