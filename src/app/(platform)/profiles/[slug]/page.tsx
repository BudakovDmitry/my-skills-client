import Image from "next/image";
import Link from "next/link";
import profilePhoto from '@/../public/profile_photo.jpg'
import facebook from '@/../public/facebook.png'
import github from '@/../public/github.png'
import instagram from '@/../public/instagram.png'
import linkedIn from '@/../public/linkedin.png'
import work from '@/../public/work_icon.png'
import world from '@/../public/world.png'
import close from '@/../public/close.png'

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <div className='flex-1 flex flex-col items-center mt-2 mb-14'>
      <div className="flex justify-center w-2/3">
        <div className="p-8 rounded-lg shadow-2xl min-h-full w-2/3">
          <h2 className="font-bold text-2xl mb-4">Будаков Дмитро Ігорович</h2>
          <div className="w-4/5 border-b border-red-200 mb-4"></div>
          <div className="flex mb-2">
            <Image className="mr-2 h-5 w-auto object-cover" src={work} alt="Work" />
            <p className="font-bold">Full Stack Developer</p>
          </div>
          <div className="flex mb-6">
            <Image className="mr-2 h-5 w-auto object-cover" src={world} alt="World" />
            <p className="text-sm text-gray-500">Місцезнаходження - Україна, Дніпро</p>
          </div>
          <p className="text-xs text-gray-500 mb-8 leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className="text-xs text-gray-500 mb-8 leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <h3 className="font-bold text-xl mb-4">Мій todo-лист на цей місяць</h3>
          <div className="flex min-w-full mb-6">
            <input type="text" placeholder="Що хочете вивчити?" className="w-4/5 mr-2 border rounded-md pl-2 bg-slate-50" />
            <button className="bg-red-400 text-white font-bold text-sm rounded-md px-4 py-2 w-1/5">Додати</button>
          </div>
          <div className="flex items-center bg-slate-50 rounded-md px-4 py-3 mb-2">
            <input type="checkbox" className="mr-3 cursor-pointer" />
            <p className="font-bold mr-auto text-md">Node.js</p>
            <span className="text-xs bg-slate-200 text-slate-800 px-3 py-1 rounded-md font-bold">Вивчаю</span>
            <button className="bg-trbg-transparent border-none ml-4">
              <Image className="w-4 h-4" src={close} alt="close" />
            </button>
          </div>
          <div className="flex items-center bg-slate-50 rounded-md px-4 py-3 mb-2">
            <input type="checkbox" className="mr-3 cursor-pointer" />
            <p className="font-bold mr-auto text-md">React.js</p>
            <span className="text-xs bg-slate-200 text-slate-800 px-3 py-1 rounded-md font-bold">Вивчаю</span>
            <button className="bg-trbg-transparent border-none ml-4">
              <Image className="w-4 h-4" src={close} alt="close" />
            </button>
          </div>
          <div className="flex items-center bg-slate-50 rounded-md px-4 py-3 mb-2">
            <input type="checkbox" className="mr-3 cursor-pointer" />
            <p className="font-bold mr-auto text-md">Next.js</p>
            <span className="text-xs bg-slate-200 text-slate-800 px-3 py-1 rounded-md font-bold">Вивчаю</span>
            <button className="bg-trbg-transparent border-none ml-4">
              <Image className="w-4 h-4" src={close} alt="close" />
            </button>
          </div>
          <div className="flex items-center bg-slate-50 rounded-md px-4 py-3 mb-2">
            <input type="checkbox" className="mr-3 cursor-pointer" />
            <p className="font-bold mr-auto text-md">JavaScript</p>
            <span className="text-xs bg-slate-200 text-slate-800 px-3 py-1 rounded-md font-bold">Вивчаю</span>
            <button className="bg-trbg-transparent border-none ml-4">
              <Image className="w-4 h-4" src={close} alt="close" />
            </button>
          </div>
          <div className="flex items-center bg-slate-50 rounded-md px-4 py-3 mb-2">
            <input type="checkbox" className="mr-3 cursor-pointer" />
            <p className="font-bold mr-auto text-md">TypeScript</p>
            <span className="text-xs bg-slate-200 text-slate-800 px-3 py-1 rounded-md font-bold">Вивчаю</span>
            <button className="bg-trbg-transparent border-none ml-4">
              <Image className="w-4 h-4" src={close} alt="close" />
            </button>
          </div>
        </div>
        <div className="w-1/3">
          <Image className="rounded-md mb-4" src={profilePhoto} alt="Profile Image" />
          <div className="flex items-center justify-center">
            <a href="#" target="_blank" className="mx-1 w-6 h-6">
              <Image className="" src={facebook} alt="Facebook" />
            </a>
            <a href="#" target="_blank" className="mx-1 w-6 h-6">
              <Image className="" src={github} alt="Github" />
            </a>
            <a href="#" target="_blank" className="mx-1 w-6 h-6">
              <Image className="" src={instagram} alt="Instagram" />
            </a>
            <a href="#" target="_blank" className="mx-1 w-6 h-6">
              <Image className="" src={linkedIn} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;