import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from "../model/validationSchema";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { IRegistration } from "../model/types";
import { authService } from "@/shared/api";
import { toast } from "sonner";
import { PAGE, QUERY_KEY } from "@/shared/config";

export const useRegistrationForm = () => {
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

  return {
    onSubmit,
    register,
    handleSubmit,
    errors
  }
}