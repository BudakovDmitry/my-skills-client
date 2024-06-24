import { axiosClassic, removeFromStorage, saveTokenStorage } from "@/shared/api"
import { IAuthResponse } from "@/shared/model/types"
import { ILogin } from "@/pagesView/login/model/types"
import { IRegistration } from "@/pagesView/registration/model/types"
import { ENDPOINTS } from "@/shared/config"

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