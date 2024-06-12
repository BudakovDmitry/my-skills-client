'use client'

import { QUERY_KEY } from "@/config/query-key.config";
import { ICreateMessageContent, ICreateComment, ICreateCommentContent, ICreateMessage } from "@/types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import validationSchema from "./validationSchema";
import EmojiPicker from '@/components/blocks/EmojiPicker/EmojiPicker';
import { IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { commentService } from "@/services/comment.service";
import { useEffect, useState } from "react";
import { useMyProfile } from "@/hooks/useMyProfile";
import { usePathname } from 'next/navigation';
import { PAGE } from "@/config/pages-url.config";
import { chatService } from "@/services/chat.service";
import io from 'socket.io-client';

const socket = io('http://localhost:8000', {
  transports: ['websocket'],
});

type AddMessageFormProps = {
  chatId: string
}

const AddMessageForm = ({ chatId }: AddMessageFormProps) => {
  const queryClient = useQueryClient()
  const { data: currentProfile } = useMyProfile()
  const [message, setMessage] = useState<string>('');
  const { register, handleSubmit } = useForm<ICreateMessageContent>({
    resolver: yupResolver(validationSchema)
  });

  useEffect(() => {
    socket.on('messageCreated', (data) => {
      queryClient.invalidateQueries({ queryKey: [`${QUERY_KEY.GET_CHAT_BY_ID}_${chatId}`] })
    });
  }, [])

  const { mutate } = useMutation({
    mutationKey: [QUERY_KEY.CREATE_MESSAGE],
    mutationFn: (data: ICreateMessage) => chatService.createMessageSocket(data),
    onSuccess() {
      setMessage('')
      queryClient.invalidateQueries({ queryKey: [`${QUERY_KEY.GET_CHAT_BY_ID}_${chatId}`] })
    }
  })

  const onSubmit: SubmitHandler<any> = (data) => {
    const newMessage = {
      content: message,
      userId: currentProfile?.data.id || '',
      chatId: chatId
    }

    mutate(newMessage)
  }

  const handleChangeText = (event: any) => {
    setMessage(event.target.value);
  };

  const addEmojiToMessage = (emoji: { native: string; }) => {
    setMessage(prevMessage => prevMessage + emoji.native);
  };

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

export default AddMessageForm