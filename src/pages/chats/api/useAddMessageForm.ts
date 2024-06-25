import { QUERY_KEY } from "@/shared/config";
import { ICreateMessageContent, ICreateMessage } from "@/shared/model/types"
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import validationSchema from "../model/validationSchema";
import { useEffect, useState } from "react";
import { chatService } from "@/entities/chat";
import { useMyProfile } from "@/entities/user";
import io from 'socket.io-client';

const socket = io('http://localhost:8000', {
  transports: ['websocket'],
});

export const useAddMessageForm = (chatId: string, handleScrollToNewMessage: () => void) => {
  const queryClient = useQueryClient()
  const { data: currentProfile } = useMyProfile()
  const [message, setMessage] = useState<string>('');
  const { register, handleSubmit } = useForm<ICreateMessageContent>({
    resolver: yupResolver(validationSchema)
  });

  const { mutate: updateMessageReadMutate } = useMutation({
    mutationKey: [QUERY_KEY.CREATE_MESSAGE],
    mutationFn: (data: { userId: string, chatId: string }) => chatService.updateMessageReadSocket(data),
    onSuccess() {
    }
  })

  useEffect(() => {
    socket.on('messageCreated', (data) => {
      updateMessageReadMutate({ userId: currentProfile!.data.id, chatId })
      queryClient.invalidateQueries({ queryKey: [`${QUERY_KEY.GET_CHAT_BY_ID}_${chatId}`] })
    });
  }, [])

  const { mutate } = useMutation({
    mutationKey: [QUERY_KEY.CREATE_MESSAGE],
    mutationFn: (data: ICreateMessage) => chatService.createMessageSocket(data),
    onSuccess() {
      setMessage('')
      queryClient.invalidateQueries({ queryKey: [`${QUERY_KEY.GET_CHAT_BY_ID}_${chatId}`] })
      handleScrollToNewMessage()
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

  return {
    register,
    handleSubmit,
    onSubmit,
    handleChangeText,
    addEmojiToMessage,
    message
  }
}