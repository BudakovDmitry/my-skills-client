import Skeleton from '@mui/material/Skeleton';

const ProfileSkeleton = () => {
  return (
    <div className="flex items-center">
      <Skeleton variant="circular" animation="wave" width={40} height={40} sx={{ mr: 2, ml: 2 }} />
      <Skeleton variant="rounded" animation="wave" width={100} height={40} sx={{ mr: 2 }} />
    </div>
  )
}

export default ProfileSkeleton