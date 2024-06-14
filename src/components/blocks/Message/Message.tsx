import { getFormattedDate } from "@/helpers/helpers"
import { RefObject, forwardRef } from "react"

type MessageProps = {
  isCurrentProfile: boolean
  message: any
}

const Message = forwardRef<HTMLDivElement, MessageProps>(({ isCurrentProfile, message }, ref) => {

  return (
    <div ref={ref} className={`${isCurrentProfile ? 'col-start-6 col-end-13' : 'col-start-1 col-end-8'} p-3 rounded-lg`}>
      <div className={`flex items-start ${isCurrentProfile ? 'justify-start flex-row-reverse' : ''}`}>
        <div
          className={`flex items-center justify-center h-10 w-10 rounded-full flex-shrink-0 text-white ${isCurrentProfile ? 'bg-sky-500' : 'bg-sky-800'}`}
        >
          {message.user.firstName[0]}
        </div>
        <div
          className={`relative text-sm pt-3 pb-5 px-4 shadow rounded-xl ${isCurrentProfile ? 'mr-3 bg-sky-100' : 'ml-3 bg-white'}`}
        >
          <p className="font-bold mb-1 text-end">{isCurrentProfile ? 'Ви' : `${message.user.firstName} ${message.user.lastName}`}</p>
          <div className="break-all mb-2">{message.content}</div>
          <span className="absolute text-xs text-slate-400 right-4">{getFormattedDate(message.createdAt)}</span>
        </div>
      </div>
    </div>
  )
})

export default Message
