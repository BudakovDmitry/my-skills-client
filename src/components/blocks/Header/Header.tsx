'use client'

import Link from "next/link";
import Image from "next/image";

import logoImage from '@/../public/logo.png'
import { useMyProfile } from "@/hooks/useMyProfile";
import MenuSimple from "@/components/ui/dropdown";
import { usePageLink } from "@/hooks/usePageLink";
import { IPageLink } from "@/types/types";
import Loader from "@/components/ui/Loader/Loader";


const Header = () => {
    const { data: profileData, isLoading: isProfileLoading } = useMyProfile()
    const { data: pageLinkData, isLoading: isPageLinkLoading } = usePageLink()

    return (
        <header className='py-4 px-6 flex items-center justify-between border-b'>
            <Link className='text-2xl font-bold flex items-center' href="/">
                <Image className='mr-3 size-16' src={logoImage} alt='Logo' />
                My skills
            </Link>
            <div className='flex items-center'>
                <nav className="border-r-2 pr-4">
                    <ul className='flex items-center'>
                        {pageLinkData?.data.map((item: IPageLink) => (
                            <li key={item.id} className={`mx-2 font-semibold px-4 py-2 rounded-md ${item.isButton ? 'text-white bg-sky-500' : 'text-sky-500 hover:underline transition ease-out'}`}>
                                <Link href={item.link}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                {isProfileLoading ? <Loader /> : profileData ? <MenuSimple user={profileData?.data} /> : <Link className='mx-2 font-medium text-gray-500 px-4' href='/login'>Увійти</Link>}
            </div>
        </header>
    )
}

export default Header;