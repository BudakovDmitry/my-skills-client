import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from "../model/validationSchema";
import { authService } from "@/shared/api";
import { ILogin } from "../model/types";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { PAGE, QUERY_KEY } from "@/shared/config";

export const useLoginForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ILogin>({
    resolver: yupResolver(validationSchema)
  });

  const { push } = useRouter()

  const { mutate } = useMutation({
    mutationKey: [QUERY_KEY.LOGIN],
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

  return {
    onSubmit,
    handleSubmit,
    register,
    errors
  }
}