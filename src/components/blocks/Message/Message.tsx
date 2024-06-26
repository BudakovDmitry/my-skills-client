import { getFormattedDate, isPremiumUserPlan } from "@/helpers/helpers"
import { forwardRef } from "react"
import { useRouter } from "next/navigation"
import { PAGE } from "@/config/pages-url.config"
import Image from "next/image"
import { Avatar } from "@mui/material"

type MessageProps = {
  isCurrentProfile: boolean
  message: any
}

const Message = forwardRef<HTMLDivElement, MessageProps>(({ isCurrentProfile, message }, ref) => {
  const router = useRouter();

  const handleOpenUserProfile = (userId: string) => {
    router.push(`${PAGE.PROFILES}/${userId}`)
  }

  return (
    <div ref={ref} className={`${isCurrentProfile ? 'col-start-6 col-end-13' : 'col-start-1 col-end-8'} p-3 rounded-lg`}>
      <div className={`flex items-start ${isCurrentProfile ? 'justify-start flex-row-reverse' : ''}`}>
        <Avatar
          onClick={isCurrentProfile ? undefined : () => handleOpenUserProfile(message.userId)}
          alt={message.user.firstName} src={message.user.photo} className={`${isCurrentProfile ? 'ml-2' : 'mr-2 cursor-pointer'} border-2 ${isPremiumUserPlan(message.user.plan.name) ? 'border-orange-500' : 'border-white'}`} />
        <div
          className={`relative text-sm pt-3 pb-5 px-4 min-w-32 shadow rounded-xl ${isCurrentProfile ? 'mr-3 bg-sky-100' : 'ml-3 bg-white'}`}
        >
          <p className={`font-bold mb-1 ${isCurrentProfile ? 'text-end' : 'text-start'}`}>{isCurrentProfile ? 'Ви' : `${message.user.firstName} ${message.user.lastName}`}</p>
          <div className={`break-all mb-2 ${isCurrentProfile ? 'text-end' : 'text-start'}`}>{message.content}</div>
          <span className="absolute text-xs text-slate-400 right-4">{getFormattedDate(message.createdAt)}</span>
        </div>
      </div>
    </div>
  )
})

export default Message
