import Comment from "../Comment/Comment"
import CommentReply from "../CommentReply/CommentReply"
import EmojiPicker from '../EmojiPicker/EmojiPicker'
import { IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

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
            <div
              className="flex flex-row items-center h-16 rounded-xl bg-white w-full pr-4"
            >
              <div className="flex-grow ml-4">
                <div className="relative w-full">
                  <input
                    type="text"
                    className="flex w-full border rounded-xl focus:outline-none focus:border-sky-200 pl-4 h-9"
                  />
                  <EmojiPicker />
                </div>
              </div>
              <div className="ml-4">
                <IconButton color="primary" aria-label="Send message" sx={{ color: 'rgb(14, 165, 233)' }}>
                  <SendIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments