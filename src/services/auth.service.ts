import { axiosClassic } from "@/shared/api/interceptors"
import { removeFromStorage, saveTokenStorage } from "./authToken.service"
import { ILogin, IRegistration, IAuthResponse } from "@/types/types"
import { ENDPOINTS } from "@/config/endpoints.config"

class AuthService {
  private BASE_URL = ENDPOINTS.AUTH

  async main(type: 'login' | 'registration', data: ILogin | IRegistration) {
    const response = await axiosClassic.post<IAuthResponse>(
      `${this.BASE_URL}/${type}`,
      data
    )

    if (response.data.accessToken) {
      saveTokenStorage(response.data.accessToken)
    }

    return response
  }

  async getNewTokens() {
    const response = await axiosClassic.post<IAuthResponse>(`${this.BASE_URL}${ENDPOINTS.ACCESS_TOKEN}`)

    if (response.data.accessToken) {
      saveTokenStorage(response.data.accessToken)
    }

    return response
  }

  async logout() {
    const response = await axiosClassic.post<boolean>(`${this.BASE_URL}${ENDPOINTS.LOGOUT}`)

    if (response) {
      removeFromStorage()
    }

    return response
  }
}

export const authService = new AuthService()