import { useQuery } from "@tanstack/react-query";
import { userService } from "@/services/user.service";

export const useUser = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: () => userService.getUserById(id)
  })

  return { data, isLoading }
}