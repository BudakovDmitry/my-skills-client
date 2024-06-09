import { useQuery } from "@tanstack/react-query";
import { userService } from "@/services/user.service";
import { QUERY_KEY } from "@/config/query-key.config";

export const useUser = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [`${QUERY_KEY.GET_USER_BY_ID}_${id}`],
    queryFn: () => userService.getUserById(id)
  })

  return { data, isLoading }
}