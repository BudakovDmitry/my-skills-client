import { useQuery } from "@tanstack/react-query";
import { userService } from "@/services/user.service";
import { QUERY_KEY } from "@/config/query-key.config";

type AllUsersParams = {
  pageNumber?: number;
  pageSize?: number;
}

export const useAllUsers = ({ pageNumber = 1, pageSize = 10 }: AllUsersParams = {}) => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.GET_ALL_USERS, { pageNumber, pageSize }],
    queryFn: () => userService.getAllUsers(pageNumber, pageSize)
  })

  return { data, isLoading }
}