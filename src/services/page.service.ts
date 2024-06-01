import { axiosWithAuth } from "@/api/interceptors"
import { IPage } from "@/types/types"

class PageService {
  private BASE_URL = '/page'

  async getPageByName(name: string) {
    const response = await axiosWithAuth.get<IPage>(`${this.BASE_URL}/${name}`)

    return response
  }


}

export const pageService = new PageService()