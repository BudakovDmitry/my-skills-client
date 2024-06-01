import Image from "next/image";
import Link from "next/link";
import profilePhoto from '@/../public/profile_photo.jpg'
import facebook from '@/../public/facebook.png'
import github from '@/../public/github.png'
import instagram from '@/../public/instagram.png'
import linkedIn from '@/../public/linkedin.png'
import work from '@/../public/work_icon.png'
import world from '@/../public/world.png'
import { IUser } from "@/types/types";

const ProfilesCard = ({ user }: { user: IUser }) => {
  return (
      <div className="flex items-center justify-center w-2/3 my-16">
        <div className="p-8 rounded-lg shadow-2xl min-h-full w-2/3">
          <h2 className="font-bold text-2xl mb-4">{`${user.firstName} ${user.lastName}`}</h2>
          <div className="w-4/5 border-b border-red-200 mb-4"></div>
          <div className="flex mb-2">
            <Image className="mr-2 h-5 w-auto object-cover" src={work} alt="Work" />
            <p className="font-bold">{user.work}</p>
          </div>
          <div className="flex mb-6">
            <Image className="mr-2 h-5 w-auto object-cover" src={world} alt="World" />
            <p className="text-sm text-gray-500">Місцезнаходження - {user.location}</p>
          </div>
          <p className="text-xs text-gray-500 mb-8 leading-5">{user.description}</p>
          <Link href={`/profiles/${user.id}`} className="text-sm bg-red-400 text-white font-bold rounded-full px-4 py-2 mb-8 inline-block">Дивитись анкету</Link>
          <div className="flex items-center">
          {
              user?.links?.facebook ? (
                <a href={user.links.facebook } target="_blank" className="mx-1 w-6 h-6">
                  <Image src={facebook} alt="Facebook" />
                </a>
              ) : null
            }

            {
              user?.links?.github ? (
                <a href={user.links.github} target="_blank" className="mx-1 w-6 h-6">
                  <Image src={github} alt="Github" />
                </a>
              ) : null
            }
            {
              user?.links?.instagram ? (
                <a href={user.links.instagram} target="_blank" className="mx-1 w-6 h-6">
                  <Image src={instagram} alt="Instagram" />
                </a>
              ) : null
            }

            {
              user?.links?.linkedIn ? (
                <a href={user.links.linkedIn} target="_blank" className="mx-1 w-6 h-6">
                  <Image src={linkedIn} alt="LinkedIn" />
                </a>
              ) : null
            }
          </div>
        </div>
        <div className="aspect-square w-1/3 flex items-center justify-center">
          <Image className="object-cover aspect-square rounded-md" src={profilePhoto} alt="Profile Image" />
        </div>
    </div>
  )
}

export default ProfilesCard