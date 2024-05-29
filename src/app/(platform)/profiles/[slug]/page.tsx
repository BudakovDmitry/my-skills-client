'use client'

import ProfileCard from "@/components/blocks/ProfileCard/ProfileCard";
import { useUser } from "@/hooks/useUser";

const Page = ({ params }: { params: { slug: string } }) => {
  const { data, isLoading } = useUser(params.slug)


  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className='flex-1 flex flex-col items-center mt-2 mb-14'>
      {data ? <ProfileCard user={data.data} isOnlyView /> : null}
    </div>
  )
}

export default Page;