import ProfileCard from '@/components/blocks/ProfileCard/ProfileCard'
import { useProfile } from '@/hooks/useProfile';

const Profile = () => {
  const { data, isLoading } = useProfile()

  return (
    <div className='flex-1 flex flex-col items-center mt-2 mb-14'>
      {isLoading ? 'Loading...' : <ProfileCard user={data} />}
    </div>
  )
}

export default Profile;