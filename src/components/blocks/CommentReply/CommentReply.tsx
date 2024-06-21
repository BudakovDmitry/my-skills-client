import { getFormattedDate } from "@/shared/utils"
import { IComment } from "@/types/types"

type CommentReplyProps = {
  comment: IComment
}

const CommentReply = ({ comment }: CommentReplyProps) => {
  return (
    <div className="col-start-6 col-end-13 p-3 rounded-lg">
      <div className="flex items-start justify-start flex-row-reverse">
        <div
          className={`flex items-center justify-center h-10 w-10 rounded-full bg-sky-500 flex-shrink-0 text-white`}
        >
          {comment.author.firstName[0]}
        </div>
        <div
          className="relative mr-3 text-sm bg-sky-100 pt-3 pb-5 px-4 shadow rounded-xl"
        >
          <p className="font-bold mb-1 text-end">{comment.author.firstName} {comment.author.lastName}</p>
          <div className="break-all mb-2">{comment.text}</div>
          <span className="absolute text-xs text-slate-400 right-4">{getFormattedDate(comment.createdAt)}</span>
        </div>
      </div>
    </div>
  )
}

export default CommentReply