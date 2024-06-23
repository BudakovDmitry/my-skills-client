import { useQuery } from "@tanstack/react-query";
import { userService } from "@/entities/user/api";
import { QUERY_KEY } from "@/shared/config";

export const useUser = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [`${QUERY_KEY.GET_USER_BY_ID}_${id}`],
    queryFn: () => userService.getUserById(id)
  })

  return { data, isLoading }
}