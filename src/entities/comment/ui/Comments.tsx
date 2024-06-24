import { IComment } from "@/types/types";
import Comment from "../../../entities/comment/ui/Comment"
import CommentReply from "../../../entities/comment/ui/CommentReply"
import AddCommentForm from "@/components/forms/AddCommentForm/AddCommentForm";

type CommentsProps = {
  userComments: IComment[]
}

const Comments = ({ userComments }: CommentsProps) => {
  return (
    <div className="flex antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <div className="flex flex-col flex-auto h-full">
          <div
            className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
          >
            <div className="flex flex-col h-full overflow-x-auto mb-4">
              <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-y-2">
                  {userComments.length ? userComments.map((commentItem: IComment, index: number) => commentItem.authorId === commentItem.recipientId ? <CommentReply key={commentItem.id} comment={commentItem} /> : <Comment key={commentItem.id} comment={commentItem} />) : <h4 className="col-start-1 col-end-13 text-center font-semibold text-sm">Коментарів ще немає, ви можете залишити перший</h4>}
                </div>
              </div>
            </div>
            <AddCommentForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments