import { axiosClassic } from "@/api/interceptors"
import { removeFromStorage, saveTokenStorage } from "./authToken.service"
import { ILogin, IRegistration, IAuthResponse } from "@/types/auth.types"

class AuthService {
  private BASE_URL = '/auth'

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
    const response = await axiosClassic.post<IAuthResponse>(`${this.BASE_URL}/login/access-token`)

    if (response.data.accessToken) {
      saveTokenStorage(response.data.accessToken)
    }

    return response
  }

  async logout() {
    const response = await axiosClassic.post<boolean>(`${this.BASE_URL}/logout`)

    if (response.data) {
      removeFromStorage()
    }

    console.log('response.data', response.data)

    return response.data
  }
}

export const authService = new AuthService()