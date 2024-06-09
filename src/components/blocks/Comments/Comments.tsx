import Comment from "../Comment/Comment"
import CommentReply from "../CommentReply/CommentReply"
import AddCommentForm from "@/components/forms/AddCommentForm/AddCommentForm";

const Comments = () => {
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
                  <Comment />
                  <CommentReply />
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