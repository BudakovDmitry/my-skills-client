import { useQuery } from "@tanstack/react-query";
import { userService } from "@/shared/api";
import { QUERY_KEY } from "@/shared/config";

export const useMyProfile = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.GET_PROFILE],
    queryFn: () => userService.getCurrentUser(),
    retry: 0
  })

  return { data, isLoading }
}