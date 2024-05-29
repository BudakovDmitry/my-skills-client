import { useQuery } from "@tanstack/react-query";
import { userService } from "@/services/user.service";

export const useMyProfile = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: () => userService.getCurrentUser()
  })

  return { data, isLoading }
}