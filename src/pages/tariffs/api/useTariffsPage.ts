'use client'

import { useMyProfile, userService } from "@/shared/api"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { useRouter } from "next/navigation";
import { PAGE, QUERY_KEY } from "@/shared/config"

export const useTariffsPage = () => {
  const queryClient = useQueryClient()
  const { data: profileData, isLoading } = useMyProfile()
  const router = useRouter();

  const { mutate } = useMutation({
    mutationKey: [QUERY_KEY.UPDATE_PLAN],
    mutationFn: (data: { newPlanName: string }) => userService.updateUserPlan(data),
    onSuccess() {
      toast.success('План успішно оновлено!')
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GET_PROFILE] })
    }
  })

  const handleChangePlan = (newPlanName: string) => {
    if (!profileData) {
      router.push(PAGE.LOGIN)
      return
    }
    mutate({ newPlanName })
  }

  return {
    isLoading,
    handleChangePlan
  }
}