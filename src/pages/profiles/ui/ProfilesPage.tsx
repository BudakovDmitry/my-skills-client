'use client'

import { Pagination } from '@/features/Pagination';
import ProfileCardList from './ProfileCardList';
import { useProfilesPage } from '../api/useProfilesPage';
import { Loader } from '@/shared/ui';

const ProfilesPage = () => {
  const {
    page,
    setPage,
    isLoading,
    users,
    totalPages
  } = useProfilesPage()

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className='flex-1 flex flex-col items-center justify-between'>
      <ProfileCardList users={users} />
      {totalPages > 1 ? <Pagination page={page} setPage={setPage} totalPages={totalPages} /> : null}

    </div>
  )
}

export default ProfilesPage;