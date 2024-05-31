import { axiosWithAuth } from "@/api/interceptors"
import { IPageLink } from "@/types/auth.types"

class PageLinkService {
  private BASE_URL = '/page-link'

  async getAllLinks() {
    const response = await axiosWithAuth.get<IPageLink[]>(this.BASE_URL)

    return response
  }


}

export const pageLinkService = new PageLinkService()