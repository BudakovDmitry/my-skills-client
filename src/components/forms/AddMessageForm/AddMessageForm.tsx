'use client'

import { QUERY_KEY } from "@/config/query-key.config";
import { ICreateMessageContent, ICreateComment, ICreateCommentContent } from "@/types/types";
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
// import io from 'socket.io-client';

// const socket = io('http://localhost:8000', {
//   transports: ['websocket'],
// });

const AddMessageForm = () => {
  const [message, setMessage] = useState<string>('');
  const queryClient = useQueryClient()
  const { data: currentProfile } = useMyProfile()
  const { register, handleSubmit } = useForm<ICreateMessageContent>({
    resolver: yupResolver(validationSchema)
  });
  const pathname = usePathname();
  const page = pathname.split('/')[1];
  const userId = pathname.split('/')[2];
  const currentProfileId = currentProfile ? currentProfile.data.id : '';

  // useEffect(() => {
  //   socket.on('commentCreated', (data) => {
  //     queryClient.invalidateQueries({ queryKey: [PAGE.PROFILE.includes(page) ? QUERY_KEY.GET_PROFILE : `${QUERY_KEY.GET_USER_BY_ID}_${userId}`] })
  //   });
  // }, [])

  const { mutate } = useMutation({
    mutationKey: [QUERY_KEY.CREATE_COMMENT],
    mutationFn: (data: any) => commentService.create(data),
    onSuccess() {
      toast.success('Коментар успішно додано!')
      setMessage('')
      queryClient.invalidateQueries({ queryKey: [PAGE.PROFILE.includes(page) ? QUERY_KEY.GET_PROFILE : `${QUERY_KEY.GET_USER_BY_ID}_${userId}`] })
    }
  })

  const onSubmit: SubmitHandler<any> = (data) => {
    const newComment = {
      text: message,
      authorId: currentProfileId,
      recipientId: userId ? userId : currentProfileId
    }

    mutate(newComment)
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