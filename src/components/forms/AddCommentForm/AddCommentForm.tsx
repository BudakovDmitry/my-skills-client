'use client'

import { QUERY_KEY } from "@/config/query-key.config";
import { IComment, ICreateComment } from "@/types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import validationSchema from "./validationSchema";
import EmojiPicker from '@/components/blocks/EmojiPicker/EmojiPicker';
import { IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { commentService } from "@/services/comment.service";
import { useState } from "react";
import { useMyProfile } from "@/hooks/useMyProfile";
import { usePathname } from 'next/navigation';

const AddCommentForm = () => {
  const [message, setMessage] = useState<string>('');
  const { data: currentProfile } = useMyProfile()
  const { register, handleSubmit } = useForm<ICreateComment>({
    resolver: yupResolver(validationSchema)
  });
  const pathname = usePathname();
  const userId = pathname.substring(pathname.lastIndexOf('/') + 1);

  const { mutate } = useMutation({
    mutationKey: [QUERY_KEY.CREATE_COMMENT],
    mutationFn: (data: IComment) => commentService.create(data),
    onSuccess() {
      toast.success('Коментар успішно додано!')
      setMessage('')
    }
  })

  const onSubmit: SubmitHandler<ICreateComment> = (data) => {
    const newComment = {
      ...data,
      authorId: currentProfile ? currentProfile.data.id : '',
      recipientId: userId
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
              placeholder="Що хочете вивчити?"
              className="flex w-full border rounded-xl focus:outline-none focus:border-sky-200 pl-4 h-9"
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