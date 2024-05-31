import { useQuery } from "@tanstack/react-query";
import { pageLinkService } from "@/services/pageLink.service";

export const usePageLink = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['page-link'],
    queryFn: () => pageLinkService.getAllLinks(),
    retry: 1
  })

  return { data, isLoading }
}