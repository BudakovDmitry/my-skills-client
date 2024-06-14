'use client'

import Link from "next/link";
import Image from "next/image";
import logoImage from '@/../public/logo.png'
import { useMyProfile } from "@/hooks/useMyProfile";
import MenuSimple from "@/components/blocks/DropdownMenu";
import { usePageLink } from "@/hooks/usePageLink";
import { IPageLink } from "@/types/types";
import { PAGE } from "@/config/pages-url.config";
import ProfileSkeleton from "../ProfileSkeleton/ProfileSkeleton";
import { IconButton, Tooltip } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Drawer from "../Drawer/Drawer";
import { PERMISSION } from "@/utils/permissions";

const Header = () => {
    const { data: profileData, isLoading: isProfileLoading } = useMyProfile()
    const { data: pageLinkData } = usePageLink()

    const hasViewAllProfilesPermission = profileData?.data.role.permissions.some(
        permission => permission.name === PERMISSION.VIEW_ALL_PROFILES && permission.value === true
    );

    return (
        <header className='py-4 px-4 lg:px-6 flex items-center justify-between border-b'>
            <Link className='text-md lg:text-2xl font-bold flex items-center' href="/">
                <Image className='mr-3 size-10 lg:size-16' src={logoImage} alt='Logo' />
                My skills
            </Link>
            <div className='hidden lg:flex items-center'>
                <nav className="border-r-2 pr-4">
                    <ul className='flex items-center'>
                        {pageLinkData?.data.map((item: IPageLink) => (
                            <li key={item.id} className={`mx-2 font-semibold px-4 py-2 rounded-md ${item.isButton ? 'text-white bg-sky-500' : 'text-sky-500 hover:underline transition ease-out'}`}>
                                {hasViewAllProfilesPermission
                                    ? <Link href={item.link}>{item.name}</Link>
                                    : (
                                        <Tooltip title="Ви не маєте доступу, змініть свій тариф">
                                            <span>{item.name}</span>
                                        </Tooltip>
                                    )}
                            </li>
                        ))}
                    </ul>
                </nav>
                {profileData ? (
                    <div className="border-r-2 px-2">
                        <Link href={PAGE.CHATS} >
                            <IconButton>
                                <MailOutlineIcon />
                            </IconButton>
                        </Link>
                    </div>
                ) : null}

                {isProfileLoading ?
                    <ProfileSkeleton />
                    : profileData
                        ? <MenuSimple user={profileData?.data} />
                        : <Link className='mx-2 font-medium text-gray-500 px-4' href={PAGE.LOGIN}>Увійти</Link>
                }
            </div>
            <div className="block w-14 lg:hidden">
                <Drawer profileData={profileData} pageLinkData={pageLinkData} />
            </div>
        </header>
    )
}

export default Header;