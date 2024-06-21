import { axiosWithAuth } from "@/shared/api"
import { ENDPOINTS } from "@/shared/config"
import { IAllUsersResponse, IUser, IUserEdit } from "@/types/types";

class UserService {
  private BASE_URL = ENDPOINTS.USER

  async getCurrentUser() {
    const response = await axiosWithAuth.get<IUser>(this.BASE_URL)

    return response
  }

  async getUserById(id: string) {
    const response = await axiosWithAuth.get<IUser>(`${this.BASE_URL}/all/${id}`)

    return response
  }

  async getAllUsers(pageNumber: number, pageSize: number) {
    const response = await axiosWithAuth.get<IAllUsersResponse>(`${this.BASE_URL}/all`, {
      params: {
        pageNumber,
        pageSize
      }
    })

    return response
  }

  async updateUser(data: IUserEdit) {
    const response = await axiosWithAuth.put<IUser>(this.BASE_URL, data)

    return response
  }


  async updateUserPlan(data: { newPlanName: string }) {
    const response = await axiosWithAuth.put<IUser>(`${this.BASE_URL}/plan`, data)

    return response
  }

  async uploadPhoto(id: string, data: FormData) {
    const response = await axiosWithAuth.post<FormData>(`${this.BASE_URL}/upload/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    return response
  }
}

export const userService = new UserService()