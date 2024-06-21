'use client'

import { Loader } from "@/shared/ui"
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