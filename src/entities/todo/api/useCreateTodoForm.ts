import { ICreateTodo, ICreateTodoForm } from "../model/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import validationSchema from "../model/createTodoSchema";
import { todoService } from "./todo.service";
import { QUERY_KEY } from "@/shared/config";
import { useQueryClient } from '@tanstack/react-query'

export const useCreateTodoForm = (userId: string) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ICreateTodoForm>({
    resolver: yupResolver(validationSchema)
  });

  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationKey: [QUERY_KEY.CREATE_TODO],
    mutationFn: (data: ICreateTodo) => todoService.createTodo(data),
    onSuccess() {
      toast.success('Todo успішно додано!')
      reset()
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GET_PROFILE] })
    }
  })

  const onSubmit: SubmitHandler<ICreateTodoForm> = (data) => {
    mutate({ ...data, userId })
  }

  return {
    handleSubmit,
    register,
    errors,
    onSubmit
  }
}