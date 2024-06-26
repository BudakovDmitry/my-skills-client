import { errorCatch } from './error'
import { axiosClassic, axiosWithAuth } from './interceptors'
import { authService } from './services/auth.service'
import { userService } from './services/user.service'
import { useUser } from './hooks/useUser'
import { useMyProfile } from './hooks/useMyProfile'
import { useAllUsers } from './hooks/useAllUsers'
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
  removeFromStorage,
  userService,
  useUser,
  useMyProfile,
  useAllUsers
}