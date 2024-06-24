import { axiosWithAuth } from "@/shared/api"
import { ENDPOINTS } from "@/shared/config"
import { ICreateComment } from "@/shared/model/types"

class CommentService {
  private BASE_URL = ENDPOINTS.COMMENT

  async create(data: ICreateComment) {
    const response = await axiosWithAuth.post(this.BASE_URL, data)

    return response
  }
}

export const commentService = new CommentService()
