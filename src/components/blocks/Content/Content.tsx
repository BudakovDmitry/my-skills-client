'use client'

import Loader from "@/components/ui/Loader/Loader"
import { usePage } from "@/hooks/usePage"

const Content = ({ name }: { name: string }) => {

  const { data, isLoading } = usePage(name)

  if (isLoading) {
    return (<Loader />)
  }

  return (
    <>
      {data ? <div dangerouslySetInnerHTML={{ __html: data.data.content }} /> : null}
    </>
  )
}

export default Content