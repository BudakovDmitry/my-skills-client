import { axiosClassic } from "@/api/interceptors"
import { removeFromStorage, saveTokenStorage } from "./authToken.service"

export const authService = {
  async main(type: 'login' | 'register', data: any) {
    const response = await axiosClassic.post(
      `/auth/${type}`,
      data
    )

    if (response.data.accessToken) {
      saveTokenStorage(response.data.accessToken)
    }

    return response
  },

  async getNewTokens() {
    const response = await axiosClassic.post('/auth/login/access-token')

    if (response.data.accessToken) {
      saveTokenStorage(response.data.accessToken)
    }

    return response
  },

  async logout() {
    const response = await axiosClassic.post<boolean>('/auth/logout')

    if (response.data) {
      removeFromStorage()
    }

    return response
  }
}