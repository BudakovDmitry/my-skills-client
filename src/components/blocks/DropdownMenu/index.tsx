import * as React from 'react';
import clsx from 'clsx';
import { Menu as BaseMenu, MenuProps } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton, MenuButtonProps } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, MenuItemProps } from '@mui/base/MenuItem';
import { Dropdown } from '@mui/base/Dropdown';
import { useTheme } from '@mui/system';
import { authService } from '@/services/auth.service';
import { IUser } from '@/types/types';
import Avatar from '@mui/material/Avatar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import { PAGE } from '@/config/pages-url.config';

function useIsDarkMode() {
  const theme = useTheme();
  return theme.palette.mode === 'dark';
}

type MenuSimplePropsType = {
  user: IUser
}

export default function MenuSimple({ user }: MenuSimplePropsType) {
  const isDarkMode = useIsDarkMode();

  const logoutHandler = async () => {
    const response = await authService.logout()

    if (response) {
      window.location.reload()
    }
  }

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <Dropdown>
        <div className='ml-2'>
          <MenuButton>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className='mr-4' />
            {user.firstName}
            <KeyboardArrowDownIcon />
          </MenuButton>
        </div>
        <Menu>
          <Link href={PAGE.PROFILE}>
            <MenuItem>Профіль</MenuItem>
          </Link>
          <Link href={PAGE.PROFILE_EDIT}>
            <MenuItem>
              Редагування
            </MenuItem>
          </Link>
          <MenuItem onClick={logoutHandler}>Вийти</MenuItem>
        </Menu>
      </Dropdown>
    </div>
  );
}

const resolveSlotProps = (fn: any, args: any) =>
  typeof fn === 'function' ? fn(args) : fn;

const Menu = React.forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  const isDarkMode = useIsDarkMode();

  return (
    <BaseMenu
      ref={ref}
      {...props}
      slotProps={{
        ...props.slotProps,
        root: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.root,
            ownerState,
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              `${isDarkMode ? 'dark' : ''} z-10`,
              resolvedSlotProps?.className,
            ),
          };
        },
        listbox: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.listbox,
            ownerState,
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              'text-sm box-border font-sans p-1.5 my-3 mx-0 rounded-xl overflow-auto outline-0 bg-white dark:bg-slate-900 border border-solid border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-300 min-w-listbox shadow-md dark:shadow-slate-900',
              resolvedSlotProps?.className,
            ),
          };
        },
      }}
    />
  );
});

const MenuButton = React.forwardRef<HTMLButtonElement, MenuButtonProps>(
  (props, ref) => {
    const { className, ...other } = props;
    return (
      <BaseMenuButton
        ref={ref}
        className={clsx(
          'cursor-pointer flex items-center  text-md font-semibold px-4 py-2 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-200 hover:dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 focus-visible:shadow-[0_0_0_4px_#ddd6fe] dark:focus-visible:shadow-[0_0_0_4px_#a78bfa] focus-visible:outline-none active:shadow-none',
          className,
        )}
        {...other}
      />
    );
  },
);

const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>((props, ref) => {
  const { className, ...other } = props;
  return (
      <BaseMenuItem
        ref={ref}
        className={clsx(
          'cursor-pointer list-none p-2 rounded-lg select-none last-of-type:border-b-0 focus:shadow-outline-purple focus:outline-0 focus:bg-slate-100 focus:dark:bg-slate-800 focus:text-slate-900 focus:dark:text-slate-300 disabled:text-slate-400 disabled:dark:text-slate-700 disabled:hover:text-slate-400 disabled:hover:dark:text-slate-700',
          className,
        )}
        {...other}
      />
  );
});
