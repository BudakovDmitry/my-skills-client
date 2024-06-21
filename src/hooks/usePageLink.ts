import { useQuery } from "@tanstack/react-query";
import { pageLinkService } from "@/services/pageLink.service";
import { QUERY_KEY } from "@/shared/config";

export const usePageLink = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.GET_ALL_PAGE_LINK],
    queryFn: () => pageLinkService.getAllLinks(),
    retry: 1
  })

  return { data, isLoading }
}