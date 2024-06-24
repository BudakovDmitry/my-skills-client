import * as React from 'react';
import clsx from 'clsx';
import { Menu as BaseMenu, MenuProps } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton, MenuButtonProps } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, MenuItemProps } from '@mui/base/MenuItem';
import { Dropdown } from '@mui/base/Dropdown';
import Avatar from '@mui/material/Avatar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import { PAGE } from '@/shared/config';
import { Badge } from '@mui/material';
import { isPremiumUserPlan } from "@/shared/utils"
import { useDropdownMenu } from '../api/useDropdownMenu';
import { MenuSimplePropsType } from '@/shared/model/types';

export default function DropdownMenu({ user }: MenuSimplePropsType) {
  const { logoutHandler } = useDropdownMenu()

  return (
    <div>
      <Dropdown>
        <div className='ml-2'>
          <MenuButton>
            {
              isPremiumUserPlan(user.plan.name)
                ? (
                  <Badge badgeContent={user.plan.name} color="warning" sx={{ fontSize: 6 }}>
                    <Avatar alt={user.firstName} src={user.photo} className='mr-4 border-2 border-orange-500' />
                  </Badge>
                ) :
                <Avatar alt={user.firstName} src={user.photo} className='mr-4' />
            }
            {user.firstName}
            <KeyboardArrowDownIcon className='ml-auto' />
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
              `z-1405`,
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
              'text-sm box-border font-sans p-1.5 my-3 mx-0 rounded-xl overflow-auto outline-0 bg-white border border-solid border-slate-200 text-slate-00 min-w-listbox shadow-md',
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
          'cursor-pointer flex items-center w-full text-md font-semibold px-4 py-2 bg-white border-slate-200 text-slate-900  hover:border-slate-300 focus-visible:shadow-[0_0_0_4px_#ddd6fe] focus-visible:outline-none active:shadow-none',
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
