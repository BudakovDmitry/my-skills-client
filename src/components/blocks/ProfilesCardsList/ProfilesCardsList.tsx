'use client'

import { useAllUsers } from "@/hooks/useAllUsers"
import ProfilesCard from "../ProfilesCard/ProfilesCard"
import { IUser } from "@/types/types"
import Loader from "@/components/ui/Loader/Loader"
import Pagination from "@/components/ui/Pagination/Pagination"
import { useState } from "react"

const ProfilesCardsList = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = useAllUsers({ pageNumber: page })

  const handleChangePage = (event: any, value: number) => {
    setPage(value);
  };

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center">
        <Loader />
      </div>
    )
  }

  return (
    <>
      {data?.data.users.map((user: IUser) => <ProfilesCard key={user.id} user={user} />)}
      <Pagination page={page} handleChangePage={handleChangePage} totalPages={data?.data.totalPages} />
    </>
  )
}

export default ProfilesCardsList