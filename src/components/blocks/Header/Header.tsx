'use client'

import Link from "next/link";
import Image from "next/image";
import logoImage from '@/../public/logo.png'
import { useMyProfile } from "@/hooks/useMyProfile";
import MenuSimple from "@/components/blocks/DropdownMenu";
import { usePageLink } from "@/hooks/usePageLink";
import { IPageLink } from "@/types/types";
import { PAGE, PERMISSION } from "@/shared/config";
import ProfileSkeleton from "../ProfileSkeleton/ProfileSkeleton";
import { IconButton } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Drawer from "../Drawer/Drawer";
import MenuItem from "@/components/ui/MenuItem/MenuItem";
import { checkingPermission } from "@/shared/utils"
import { Loader } from "@/shared/ui"

const Header = () => {
    const { data: profileData, isLoading: isProfileLoading } = useMyProfile()
    const { data: pageLinkData } = usePageLink()

    if (isProfileLoading) {
        return
    }

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