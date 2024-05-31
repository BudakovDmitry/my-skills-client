import ProfilesCardsList from '@/components/blocks/ProfilesCardsList/ProfilesCardsList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Анкети',
  description: 'Анкети сайту',
};

const Profiles = () => {
  return (
    <div className='flex-1 flex flex-col items-center justify-center'>
      <ProfilesCardsList />
    </div>
  )
}

export default Profiles;