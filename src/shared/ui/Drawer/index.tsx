import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import { IPageLink } from '@/types/types';
import { PAGE } from '@/shared/config';
import Link from 'next/link';
import { MenuSimple } from '@/shared/ui';
import EmailIcon from '@mui/icons-material/Email';
import { SwipeableTemporaryDrawerProps } from '@/shared/model/types';
import { useDrawer } from '@/shared/api/useDrawer';

const SwipeableTemporaryDrawer = ({ profileData, pageLinkData }: SwipeableTemporaryDrawerProps) => {
  const {
    state,
    toggleDrawer
  } = useDrawer()

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
