import ProfileCard from "@/components/blocks/ProfileCard/ProfileCard";

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <div className='flex-1 flex flex-col items-center mt-2 mb-14'>
       <ProfileCard />
    </div>
  )
}

export default Page;