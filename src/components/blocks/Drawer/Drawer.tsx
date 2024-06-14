import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IPageLink, IUser } from '@/types/types';
import { AxiosResponse } from 'axios';
import { PAGE } from '@/config/pages-url.config';
import Link from 'next/link';
import MenuSimple from '../DropdownMenu';
import EmailIcon from '@mui/icons-material/Email';

type SwipeableTemporaryDrawerProps = {
  profileData?: AxiosResponse<IUser, any>
  pageLinkData?: AxiosResponse<IPageLink[], any>
}


const SwipeableTemporaryDrawer = ({ profileData, pageLinkData }: SwipeableTemporaryDrawerProps) => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: string, open: boolean) => (event: any) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: string) => (
    <Box
      sx={{ width: 300, padding: '0 10px' }}
      role="presentation"
    >
      <div className='my-6'>
        {profileData
          ? <MenuSimple user={profileData?.data} />
          : <Link className='mx-2 font-medium text-gray-500 px-4' href={PAGE.LOGIN}>Увійти</Link>
        }

        {profileData ? (
          <div className="px-2 bg-slate-400 h-10 rounded-md flex items-center justify-center text-white font-bold mt-4">
            <Link href={PAGE.CHATS} className='flex items-center'>
              <EmailIcon sx={{ mr: 2 }} />
              Повідомлення
            </Link>
          </div>
        ) : null}
      </div>
      <Divider />

      <nav className="mt-6" onClick={toggleDrawer(anchor, false)}>
        <ul className='flex flex-col'>
          {pageLinkData?.data.map((item: IPageLink) => (
            <li key={item.id} className={`mb-2 font-semibold py-2 rounded-md ${item.isButton ? 'text-white bg-sky-500 text-center' : 'text-sky-500 hover:underline transition ease-out'}`}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('right', true)}>
        <MenuIcon />
      </Button>
      <SwipeableDrawer
        anchor='right'
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {list('right')}
      </SwipeableDrawer>
    </div>
  );
}

export default SwipeableTemporaryDrawer
