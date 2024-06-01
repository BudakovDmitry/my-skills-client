import { axiosWithAuth } from "@/api/interceptors";
import { IUser, IUserEdit } from "@/types/types";

class UserService {
  private BASE_URL = '/user'

  async getCurrentUser() {
    const response = await axiosWithAuth.get<IUser>(this.BASE_URL)

    return response
  }

  async getUserById(id: string) {
    const response = await axiosWithAuth.get<IUser>(`${this.BASE_URL}/all/${id}`)

    return response
  }

  async getAllUsers() {
    const response = await axiosWithAuth.get<IUser[]>(`${this.BASE_URL}/all`)

    return response
  }

  async updateUser(data: IUserEdit) {
    const response = await axiosWithAuth.put<IUser>(this.BASE_URL, data)

    return response
  }
}

export const userService = new UserService()