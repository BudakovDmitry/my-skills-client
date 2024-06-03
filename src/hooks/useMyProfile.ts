import { useQuery } from "@tanstack/react-query";
import { userService } from "@/services/user.service";
import { QUERY_KEY } from "@/config/query-key.config";

export const useMyProfile = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.GET_PROFILE],
    queryFn: () => userService.getCurrentUser(),
    retry: 0
  })

  return { data, isLoading }
}