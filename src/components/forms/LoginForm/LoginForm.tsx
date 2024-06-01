'use client'

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from "./validationSchema";
import { authService } from "@/services/auth.service";
import { ILogin } from "@/types/types";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { PAGE } from "@/config/pages-url.config";


const LoginForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ILogin>({
    resolver: yupResolver(validationSchema)
  });

  const { push } = useRouter()

  const { mutate } = useMutation({
    mutationKey: ['login'],
    mutationFn: (data: ILogin) => authService.main('login', data),
    onSuccess() {
      toast.success('Авторизація успішна!')
      reset()
      push(PAGE.HOME)
    }
  })

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    mutate(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-6 relative">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Пошта</label>
            <input id="email" {...register("email", { required: true })}  aria-invalid={errors.email ? "true" : "false"} className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
            {errors.email && (<span className="absolute text-xs text-red-600" role="alert">{errors.email.message}</span>)}
        </div>

        <div className="mt-6 relative">
            <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="password">Пароль</label>
            </div>

            <input id="password" {...register("password", { required: true })} className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
            {errors.password && (<span className="absolute text-xs text-red-600" role="alert">{errors.password.message}</span>)}
        </div>

        <div className="mt-8">
            <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Авторизуватись
            </button>
        </div>
    </form>
  )
}

export default LoginForm