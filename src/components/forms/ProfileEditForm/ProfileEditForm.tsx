'use client'

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from "./validationSchema";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { IUserEdit, IUser } from "@/types/types";
import { toast } from "sonner";
import { userService } from "@/services/user.service";
import { PAGE } from "@/config/pages-url.config";
import { QUERY_KEY } from "@/config/query-key.config";

const ProfileEditForm = ({ user }: { user: IUser }) => {
  const defaultValuesUser = {
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    work: user.work,
    location: user.location,
    description: user.description,
    links: {
      instagram: user.links?.instagram,
      facebook: user.links?.facebook,
      github: user.links?.github,
      linkedIn: user.links?.linkedIn,
    }
  }

  const { register, handleSubmit, formState: { errors }, reset } = useForm<IUserEdit>({
    resolver: yupResolver(validationSchema),
    defaultValues: defaultValuesUser,
  });

  const { push } = useRouter()

  const { mutate } = useMutation({
    mutationKey: [QUERY_KEY.PROFILE_EDIT],
    mutationFn: (data: IUserEdit) => userService.updateUser(data),
    onSuccess() {
      toast.success('Профіль успішно оновлений!')
      reset()
      push(PAGE.PROFILE)
    }
  })

  const onSubmit: SubmitHandler<IUserEdit> = data => {
    mutate(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-4">
          <div className="col-span-2 relative">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Ім'я *</label>
              <input type="text" placeholder="Джон" {...register("firstName", { required: true })} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
              {errors.firstName && (<span className="absolute text-xs text-red-600" role="alert">{errors.firstName.message}</span>)}
          </div>

          <div className="col-span-2 relative">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Прізвище *</label>
              <input type="text" placeholder="Сноу" {...register("lastName", { required: true })} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
              {errors.lastName && (<span className="absolute text-xs text-red-600" role="alert">{errors.lastName.message}</span>)}
          </div>

          <div className="col-span-4 relative">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Пошта *</label>
              <input type="email" placeholder="example@gmail.com" {...register("email", { required: true })} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
              {errors.email && (<span className="absolute text-xs text-red-600" role="alert">{errors.email.message}</span>)}
          </div>

          <div className="col-span-2 relative">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Робота</label>
              <input type="text" {...register("work")} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>

          <div className="col-span-2 relative">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Локація</label>
              <input type="text" {...register("location")} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>

          <div className="col-span-4 relative">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Опис</label>
              <textarea placeholder="Додайте інформацію якою б хотіли поділитись з іншими" {...register("description")} className="block min-h-52 w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>

          <div className="relative">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Instagram</label>
              <input type="text" {...register("links.instagram")} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>

          <div className="relative">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Facebook</label>
              <input type="text" {...register("links.facebook")} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>

          <div className="relative">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">GitHub</label>
              <input type="text" {...register("links.github")} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>

          <div className="relative">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">LinkedIn</label>
              <input type="text" {...register("links.linkedIn")} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>

        </div>
        <div className="mt-6">
          <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Зберегти
          </button>
        </div>
  </form>
  )
}

export default ProfileEditForm