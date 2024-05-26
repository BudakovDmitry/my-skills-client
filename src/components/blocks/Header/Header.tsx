'use client'

import Link from "next/link";
import Image from "next/image";

import logoImage from '@/../public/logo.png'
import { useProfile } from "@/hooks/useProfile";
import MenuSimple from "@/components/ui/dropdown";


const Header = () => {
    const { data, isLoading } = useProfile()

    return (
        <header className='py-4 px-6 flex items-center justify-between border-b'>
            <Link className='text-2xl font-bold flex items-center' href="/">
                <Image className='mr-3 size-16' src={logoImage} alt='Logo' />
                My skills
            </Link>
            <div className='flex items-center'>
                <nav>
                    <ul className='flex items-center'>
                        <li className='mx-2 font-semibold text-sky-500 px-4 py-2 rounded-md hover:underline transition ease-out'>
                            <Link href='/about-platform'>Про платформу</Link>
                        </li>
                        <li className='mx-2 font-semibold text-sky-500 px-4 py-2 rounded-md hover:underline transition ease-out'>
                            <Link href='/our-technologies'>Наші технології</Link>
                        </li>
                        <li className='mx-2 font-semibold px-4 py-2 text-white bg-sky-500 rounded-md'>
                            <Link href='/profiles'>Анкети</Link>
                        </li>
                    </ul>
                </nav>
                {isLoading ? 'Loading...' : data ? <MenuSimple user={data} /> : <Link className='mx-2 font-medium text-gray-500 border-l-2 px-4' href='/login'>Увійти</Link>}
            </div>
        </header>
    )
}

export default Header;