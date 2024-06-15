import { IPageLink } from "@/types/types"
import { Tooltip } from "@mui/material"
import Link from "next/link"

type MenuItemProps = {
  item: IPageLink
  hasPermission: boolean
}

const MenuItem = ({ item, hasPermission }: MenuItemProps) => {
  if (item.isButton) {
    return (
      <li className={`mx-2 font-semibold rounded-md p-0 text-white ${hasPermission ? 'bg-sky-500' : 'bg-slate-300 cursor-default'}`}>
        {hasPermission
          ? <Link className='block px-4 py-2' href={item.link}>{item.name}</Link>
          : (
            <Tooltip title='Упс... Схоже ви не маєте доступу, змініть свій тариф'>
              <span className="block px-4 py-2">{item.name}</span>
            </Tooltip>
          )
        }
      </li>
    )
  }

  return (
    <li className='mx-2 font-semibold rounded-md text-sky-500 hover:underline transition ease-out px-4 py-2'>
      <Link href={item.link}>{item.name}</Link>
    </li>
  )
}

export default MenuItem