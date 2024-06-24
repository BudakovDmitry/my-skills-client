import { axiosWithAuth } from "@/shared/api"
import { ENDPOINTS } from "@/shared/config"
import { IPage } from "@/shared/model/types"

class PageService {
  private BASE_URL = ENDPOINTS.PAGE

  async getPageByName(name: string) {
    const response = await axiosWithAuth.get<IPage>(`${this.BASE_URL}/${name}`)

    return response
  }


}

export const pageService = new PageService()