'use client'

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from "./validationSchema";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { IRegistration } from "@/types/types";
import { authService } from "@/shared/api";
import { toast } from "sonner";
import { PAGE, QUERY_KEY } from "@/shared/config";

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IRegistration>({
    resolver: yupResolver(validationSchema)
  });

  const { push } = useRouter()

  const { mutate } = useMutation({
    mutationKey: [QUERY_KEY.REGISTRATION],
    mutationFn: (data: IRegistration) => authService.main('registration', data),
    onSuccess() {
      toast.success('Реєстрація успішна!')
      reset()
      push(PAGE.HOME)
    }
  })

  const onSubmit: SubmitHandler<IRegistration> = (data) => {
    mutate(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-2">
        <div className="relative col-span-2 lg:col-span-1">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Ім'я</label>
          <input type="text" placeholder="Джон" {...register("firstName", { required: true })} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
          {errors.firstName && (<span className="absolute text-xs text-red-600" role="alert">{errors.firstName.message}</span>)}
        </div>

        <div className="relative col-span-2 lg:col-span-1">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Прізвище</label>
          <input type="text" placeholder="Сноу" {...register("lastName", { required: true })} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
          {errors.lastName && (<span className="absolute text-xs text-red-600" role="alert">{errors.lastName.message}</span>)}
        </div>

        <div className="col-span-2 relative">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Пошта</label>
          <input type="email" placeholder="example@gmail.com" {...register("email", { required: true })} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
          {errors.email && (<span className="absolute text-xs text-red-600" role="alert">{errors.email.message}</span>)}
        </div>

        <div className="relative col-span-2 lg:col-span-1">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Пароль</label>
          <input type="password" placeholder="Введіть пароль" {...register("password", { required: true })} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
          {errors.password && (<span className="absolute text-xs text-red-600" role="alert">{errors.password.message}</span>)}
        </div>

        <div className="relative col-span-2 lg:col-span-1">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Підтвердіть пароль</label>
          <input type="password" placeholder="Введіть пароль" {...register("passwordRepeat", { required: true })} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
          {errors.passwordRepeat && (<span className="absolute text-xs text-red-600" role="alert">{errors.passwordRepeat.message}</span>)}
        </div>

      </div>
      <div className="mt-6">
        <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
          Зарєструватись
        </button>
      </div>
    </form>
  )
}

export default RegistrationForm