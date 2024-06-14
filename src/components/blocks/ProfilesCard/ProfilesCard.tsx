import Image from "next/image";
import Link from "next/link";
import profilePhoto from '@/../public/profile_photo.jpg'
import work from '@/../public/work_icon.png'
import world from '@/../public/world.png'
import { IUser } from "@/types/types";
import { PAGE } from "@/config/pages-url.config";
import SocialLinks from "../SocialLinks/SocialLinks";

const ProfilesCard = ({ user }: { user: IUser }) => {

  return (
    <div className="flex items-center justify-center flex-col-reverse lg:flex-row w-full lg:w-2/3 my-16 px-4 lg:px-0">
      <div className="p-8 rounded-lg shadow-2xl min-h-full w-full lg:w-2/3">
        <h2 className="font-bold text-2xl mb-4">{`${user.firstName} ${user.lastName}`}</h2>
        <div className="w-4/5 border-b border-red-200 mb-4"></div>
        {user.work ? (
          <div className="flex mb-2">
            <Image className="mr-2 h-5 w-auto object-cover" src={work} alt="Work" />
            <p className="font-bold">{user.work}</p>
          </div>
        ) : null}
        {user.location ? (
          <div className="flex mb-6">
            <Image className="mr-2 h-5 w-auto object-cover" src={world} alt="World" />
            <p className="text-sm text-gray-500">Місцезнаходження - {user.location}</p>
          </div>
        ) : null}

        <p className="text-xs text-gray-500 mb-8 leading-5">{user.description}</p>
        <Link href={`${PAGE.PROFILES}/${user.id}`} className="text-sm bg-red-400 text-white font-bold rounded-full px-4 py-2 mb-8 inline-block">Дивитись анкету</Link>
        {
          user.links
            ? (
              <div className="flex items-center">
                <SocialLinks links={user.links} />
              </div>
            )
            : null
        }
      </div>
      <div className="aspect-square w-full lg:w-1/3 flex lg:items-center justify-center">
        <Image className="object-cover aspect-square rounded-md" src={user && user.photo ? user.photo : profilePhoto} alt="Profile Image" width={300} height={600} />
      </div>
    </div>
  )
}

export default ProfilesCard