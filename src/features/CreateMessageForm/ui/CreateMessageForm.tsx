'use client'

import { EmojiPicker } from '@/shared/ui';
import { IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { CreateMessageFormProps } from "../model/types";
import { useCreateMessageForm } from "../api/useCreateMessageForm";

const CreateMessageForm = ({ chatId, handleScrollToNewMessage }: CreateMessageFormProps) => {
  const {
    register,
    handleSubmit,
    onSubmit,
    handleChangeText,
    addEmojiToMessage,
    message
  } = useCreateMessageForm(chatId, handleScrollToNewMessage)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className="flex flex-row items-center h-16 rounded-xl bg-white w-full pr-4"
      >
        <div className="flex-grow ml-4">
          <div className="relative w-full flex items-center">
            <EmojiPicker addEmojiToMessage={addEmojiToMessage} />
            <input
              value={message}
              {...register("content")}
              onChange={handleChangeText}
              placeholder="Додайте повідомлення..."
              className="flex w-full border rounded-xl focus:outline-none focus:border-sky-200 pl-4 h-9 pr-10"
            />
          </div>
        </div>
        <div className="ml-4">
          <IconButton color="primary" type="submit" aria-label="Send message" sx={{ color: 'rgb(14, 165, 233)' }}>
            <SendIcon />
          </IconButton>
        </div>
      </div>
    </form>
  )
}

export default CreateMessageForm