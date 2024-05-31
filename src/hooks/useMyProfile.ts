import { useQuery } from "@tanstack/react-query";
import { userService } from "@/services/user.service";

export const useMyProfile = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: () => userService.getCurrentUser(),
    retry: 0
  })

  return { data, isLoading }
}