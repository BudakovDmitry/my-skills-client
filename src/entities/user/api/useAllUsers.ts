import { useQuery } from "@tanstack/react-query";
import { userService } from "@/entities/user";
import { QUERY_KEY } from "@/shared/config";
import { AllUsersParams } from "../model/types";

export const useAllUsers = ({ pageNumber = 1, pageSize = 10 }: AllUsersParams = {}) => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.GET_ALL_USERS, { pageNumber, pageSize }],
    queryFn: () => userService.getAllUsers(pageNumber, pageSize)
  })

  return { data, isLoading }
}