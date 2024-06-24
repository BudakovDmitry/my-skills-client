'use client'

import { IUser } from "@/shared/model/types"
import { PERMISSION } from "@/shared/config";

import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import { checkingPermission } from "@/shared/utils"
import { useMyProfileEditForm } from "../api/useMyProfileEditForm";

registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateSize, FilePondPluginFileValidateType);

const MyProfileEditForm = ({ user }: { user: IUser }) => {
  const {
    handleSubmit,
    onSubmit,
    handleAddPhoto,
    errors,
    register
  } = useMyProfileEditForm(user)


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-4">
        {checkingPermission(user.plan.permissions, PERMISSION.ADD_PHOTO)
          ?
          (
            <div className="col-span-4 relative">
              <div className="max-w-28 max-h-28 mx-auto cursor-pointer">
                <FilePond
                  acceptedFileTypes={['image/*']}
                  maxFileSize="2MB"
                  imagePreviewHeight={170}
                  stylePanelLayout='compact circle'
                  labelIdle='Фото'
                  stylePanelAspectRatio='1:1'
                  className=""
                  onaddfile={handleAddPhoto}
                />
              </div>
            </div>
          ) : null}
        <div className="col-span-4 lg:col-span-2 relative">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Ім'я *</label>
          <input type="text" placeholder="Джон" {...register("firstName", { required: true })} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
          {errors.firstName && (<span className="absolute text-xs text-red-600" role="alert">{errors.firstName.message}</span>)}
        </div>

        <div className="col-span-4 lg:col-span-2 relative">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Прізвище *</label>
          <input type="text" placeholder="Сноу" {...register("lastName", { required: true })} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
          {errors.lastName && (<span className="absolute text-xs text-red-600" role="alert">{errors.lastName.message}</span>)}
        </div>

        <div className="col-span-4 relative">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Пошта *</label>
          <input type="email" placeholder="example@gmail.com" {...register("email", { required: true })} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
          {errors.email && (<span className="absolute text-xs text-red-600" role="alert">{errors.email.message}</span>)}
        </div>

        <div className="col-span-4 lg:col-span-2 relative">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Робота</label>
          <input type="text" {...register("work")} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div className="col-span-4 lg:col-span-2 relative">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Локація</label>
          <input type="text" {...register("location")} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div className="col-span-4 relative">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Опис</label>
          <textarea placeholder="Додайте інформацію якою б хотіли поділитись з іншими" {...register("description")} className="block min-h-52 w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div className="relative col-span-4 lg:col-span-1">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Instagram</label>
          <input type="text" {...register("links.instagram")} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div className="relative col-span-4 lg:col-span-1">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Facebook</label>
          <input type="text" {...register("links.facebook")} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div className="relative col-span-4 lg:col-span-1">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">GitHub</label>
          <input type="text" {...register("links.github")} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div className="relative col-span-4 lg:col-span-1">
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

export default MyProfileEditForm