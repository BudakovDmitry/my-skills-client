import { useQuery } from "@tanstack/react-query";
import { userService } from "@/services/user.service";

export const useAllUsers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['allUsers'],
    queryFn: () => userService.getAllUsers()
  })

  return { data, isLoading }
}