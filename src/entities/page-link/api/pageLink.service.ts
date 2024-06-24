import { axiosWithAuth } from "@/shared/api"
import { ENDPOINTS } from "@/shared/config"
import { IPageLink } from "@/shared/model/types"

class PageLinkService {
  private BASE_URL = ENDPOINTS.PAGE_LINK

  async getAllLinks() {
    const response = await axiosWithAuth.get<IPageLink[]>(this.BASE_URL)

    return response
  }


}

export const pageLinkService = new PageLinkService()