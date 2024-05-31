import { useQuery } from "@tanstack/react-query";
import { pageService } from "@/services/page.service";

export const usePage = (name: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['page'],
    queryFn: () => pageService.getPageByName(name)
  })

  return { data, isLoading }
}