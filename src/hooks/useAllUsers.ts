import { useQuery } from "@tanstack/react-query";
import { userService } from "@/services/user.service";
import { QUERY_KEY } from "@/config/query-key.config";

export const useAllUsers = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.GET_ALL_USERS],
    queryFn: () => userService.getAllUsers()
  })

  return { data, isLoading }
}