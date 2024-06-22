'use client'

import MyProfileEditForm from "./MyProfileEditForm"
import { Loader } from "@/shared/ui"
import { useMyProfileEditPage } from "../api/useMyProfileEditPage"


const MyProfileEditPage = () => {
  const { myProfile, isLoading } = useMyProfileEditPage()

  if (isLoading) {
    return (
      <Loader />
    )
  }

  return (
    <div className='flex-1 flex flex-col lg:items-center px-4 lg:px-0'>
      <MyProfileEditForm user={myProfile} />
    </div>
  )
}

export default MyProfileEditPage 