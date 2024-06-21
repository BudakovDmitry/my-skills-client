import { useQuery } from "@tanstack/react-query";
import { pageService } from "@/services/page.service";
import { QUERY_KEY } from "@/shared/config";

export const usePage = (name: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.GET_PAGE],
    queryFn: () => pageService.getPageByName(name)
  })

  return { data, isLoading }
}