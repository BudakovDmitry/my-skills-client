import { ProfilesPage } from '@/pages/profiles';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Анкети',
  description: 'Анкети сайту',
};

const Profiles = () => <ProfilesPage />

export default Profiles;