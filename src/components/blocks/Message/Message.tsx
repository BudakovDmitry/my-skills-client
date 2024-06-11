import { getFormattedDate } from "@/helpers/helpers"
import { IComment } from "@/types/types"

type MessageProps = {
  message: IComment
}

const Message = ({ message }: MessageProps) => {
  return (
    <div className="col-start-1 col-end-8 p-3 rounded-lg">
      <div className="flex flex-row items-start">
        <div
          className="flex items-center justify-center h-10 w-10 rounded-full bg-sky-800 flex-shrink-0 text-white"
        >
          {/* {comment.author.firstName[0]} */}
        </div>
        <div
          className="relative ml-3 text-sm bg-white pt-3 pb-5 px-4 shadow rounded-xl"
        >
          {/* <p className="font-bold mb-1">{comment.author.firstName} {comment.author.lastName}</p>
          <div className="break-all mb-2">{comment.text}</div>
          <span className="absolute text-xs text-slate-400 left-4">{getFormattedDate(comment.createdAt)}</span> */}
        </div>
      </div>
    </div>
  )
}

export default Message