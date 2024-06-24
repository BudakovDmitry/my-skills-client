import { ProfilesPage } from '@/pagesView/profiles';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Анкети',
  description: 'Анкети сайту',
};

const Profiles = () => <ProfilesPage />

export default Profiles;