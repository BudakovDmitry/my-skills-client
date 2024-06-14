'use client'

import { ICreateTodo, ICreateTodoForm } from "@/types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import validationSchema from "./validationSchema";
import { todoService } from "@/services/todo.service";
import { QUERY_KEY } from "@/config/query-key.config";
import { useQueryClient } from '@tanstack/react-query'

type CreateTodoFromProps = {
  userId: string,
}

const CreateTodoForm = ({ userId }: CreateTodoFromProps) => {
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col lg:flex-row min-w-full mb-6 relative">
        <input type="text" {...register('name', { required: true })} placeholder="Що хочете вивчити?" className="w-full lg:w-4/5 mb-2 lg:mb-0 h-10 mr-2 border rounded-md pl-2 bg-slate-50" />
        <button type="submit" className="bg-red-400 text-white font-bold text-sm rounded-md px-4 py-2 w-full lg:w-1/5">Додати</button>
        {errors.name && (<span className="absolute text-xs text-red-600" role="alert">{errors.name.message}</span>)}
      </div>
    </form>
  )
}

export default CreateTodoForm;