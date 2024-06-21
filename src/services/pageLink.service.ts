import { axiosWithAuth } from "@/shared/api/interceptors"
import { ENDPOINTS } from "@/config/endpoints.config"
import { IPageLink } from "@/types/types"

class PageLinkService {
  private BASE_URL = ENDPOINTS.PAGE_LINK

  async getAllLinks() {
    const response = await axiosWithAuth.get<IPageLink[]>(this.BASE_URL)

    return response
  }


}

export const pageLinkService = new PageLinkService()