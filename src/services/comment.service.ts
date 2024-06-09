import { axiosWithAuth } from "@/api/interceptors"
import { ENDPOINTS } from "@/config/endpoints.config"
import { IComment } from "@/types/types"

class CommentService {
  private BASE_URL = ENDPOINTS.COMMENT

  async create(data: IComment) {
    const response = await axiosWithAuth.post(this.BASE_URL, data)

    return response
  }
}

export const commentService = new CommentService()