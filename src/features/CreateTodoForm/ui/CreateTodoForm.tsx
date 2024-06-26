'use client'

import { useCreateTodoForm } from "../api/useCreateTodoForm";
import { CreateTodoFromProps } from "../model/types";

const CreateTodoForm = ({ userId }: CreateTodoFromProps) => {
  const {
    handleSubmit,
    register,
    errors,
    onSubmit
  } = useCreateTodoForm(userId)

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