import { errorCatch } from './error'
import { axiosClassic, axiosWithAuth } from './interceptors'
import { authService } from './services/auth.service'
import {
  EnumTokens,
  getAccessToken,
  saveTokenStorage,
  removeFromStorage
} from './services/authToken.service'

export {
  errorCatch,
  axiosClassic, 
  axiosWithAuth,
  authService,
  EnumTokens,
  getAccessToken,
  saveTokenStorage,
  removeFromStorage
}