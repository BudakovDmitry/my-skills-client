import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from "../model/myProfileEditSchema";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { IUser } from "@/shared/model/types"
import { toast } from "sonner";
import { userService } from "@/entities/user";
import { PAGE, QUERY_KEY } from "@/shared/config";
import { FilePondErrorDescription, FilePondFile } from "filepond";
import { IUserEdit } from "../model/types";

export const useMyProfileEditForm = (user: IUser) => {
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

  const { mutate: mutateUploadPhoto } = useMutation({
    mutationKey: [QUERY_KEY.UPLOAD_PHOTO],
    mutationFn: (data: FormData) => userService.uploadPhoto(user.id, data),
    onSuccess() {
      toast.success('Фото успішно оновлено!')
    }
  })

  const onSubmit: SubmitHandler<IUserEdit> = data => {
    mutate(data)
  }

  const handleAddPhoto = (error: FilePondErrorDescription | null, fileItem: FilePondFile) => {
    if (!error) {
      const formData = new FormData()
      formData.append('file', fileItem.file);
      mutateUploadPhoto(formData)
    }
  }

  return {
    handleSubmit, 
    onSubmit,
    handleAddPhoto,
    errors,
    register
  }
}