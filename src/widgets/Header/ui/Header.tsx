'use client'

import Link from "next/link";
import Image from "next/image";
import logoImage from '@/../public/logo.png'

import { MenuSimple, ProfileSkeleton, Drawer, MenuItem } from "@/shared/ui";
import { IPageLink } from "@/shared/model/types"
import { PAGE, PERMISSION } from "@/shared/config";
import { IconButton } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { checkingPermission } from "@/shared/utils"
import { useHeader } from "../api/useHeader";

const Header = () => {
    const {
        profileData,
        isProfileLoading,
        pageLinkData
    } = useHeader()

    return (
        <header className='py-4 px-4 lg:px-6 flex items-center justify-between border-b'>
            <Link className='text-md lg:text-2xl font-bold flex items-center' href="/">
                <Image className='mr-3 size-10 lg:size-16' src={logoImage} alt='Logo' />
                My skills
            </Link>
            <div className='hidden lg:flex items-center'>
                <nav className="border-r-2 pr-4">
                    <ul className='flex items-center'>
                        {pageLinkData?.data.map((item: IPageLink) => <MenuItem key={item.id} item={item} hasPermission={profileData ? checkingPermission(profileData.data.plan.permissions, PERMISSION.VIEW_ALL_PROFILES) : false} />)}
                    </ul>
                </nav>
                {profileData && checkingPermission(profileData.data.plan.permissions, PERMISSION.SEND_MESSAGE) ? (
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