import { useQuery } from "@tanstack/react-query";
import { userService } from "@/services/user.service";

export const useProfile = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: () => userService.getUser()
  })

  return { data, isLoading }
}