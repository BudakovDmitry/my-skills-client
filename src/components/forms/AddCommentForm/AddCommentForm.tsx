'use client'

import { QUERY_KEY, PAGE } from "@/shared/config";
import { IComment, ICreateComment, ICreateCommentContent } from "@/types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import validationSchema from "./validationSchema";
import EmojiPicker from '@/';
import { IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { commentService } from "@/entities/comment/api";
import { useMyProfile } from "@/entities/user/api";
import { useState } from "react";
import { usePathname } from 'next/navigation';

const AddCommentForm = () => {
  const [message, setMessage] = useState<string>('');
  const queryClient = useQueryClient()
  const { data: currentProfile } = useMyProfile()
  const { register, handleSubmit } = useForm<ICreateCommentContent>({
    resolver: yupResolver(validationSchema)
  });
  const pathname = usePathname();
  const page = pathname?.split('/')[1] || '';
  const userId = pathname?.split('/')[2];
  const currentProfileId = currentProfile ? currentProfile.data.id : '';

  const { mutate } = useMutation({
    mutationKey: [QUERY_KEY.CREATE_COMMENT],
    mutationFn: (data: ICreateComment) => commentService.create(data),
    onSuccess() {
      toast.success('Коментар успішно додано!')
      setMessage('')
      queryClient.invalidateQueries({ queryKey: [PAGE.PROFILE.includes(page) ? QUERY_KEY.GET_PROFILE : `${QUERY_KEY.GET_USER_BY_ID}_${userId}`] })
    }
  })

  const onSubmit: SubmitHandler<ICreateCommentContent> = (data) => {
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
          <div className="relative w-full">
            <input
              value={message}
              {...register("text")}
              onChange={handleChangeText}
              placeholder="Додайте коментар..."
              className="flex w-full border rounded-xl focus:outline-none focus:border-sky-200 pl-4 h-9 pr-10"
            />
            <EmojiPicker addEmojiToMessage={addEmojiToMessage} />
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

export default AddCommentForm