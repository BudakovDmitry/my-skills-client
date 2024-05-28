import type { Metadata } from 'next'
import ProfilesCardsList from '@/components/blocks/ProfilesCardsList/ProfilesCardsList';

export const metadata: Metadata = {
  title: 'Анкети',
}

const Profiles = () => {
  return (
    <div className='flex-1 flex flex-col items-center justify-center'>
      <ProfilesCardsList />
    </div>
  )
}

export default Profiles;