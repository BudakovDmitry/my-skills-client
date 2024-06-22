import { errorCatch } from './error'
import { axiosClassic, axiosWithAuth } from './interceptors'
import { authService } from './services/auth.service'
import {
  EnumTokens,
  getAccessToken,
  saveTokenStorage,
  removeFromStorage
} from './services/authToken.service'
import { chatService } from './services/chat.service'
import { commentService } from './services/comment.service'
import { pageService } from './services/page.service'
import { pageLinkService } from './services/pageLink.service'
import { todoService } from './services/todo.service'
import { userService } from './services/user.service'
import { useAllUsers } from './hooks/useAllUsers'
import { useChat, useChatById } from './hooks/useChat'
import { useMyProfile } from './hooks/useMyProfile'
import { usePage } from './hooks/usePage'
import { usePageLink } from './hooks/usePageLink'
import { useUser } from './hooks/useUser'


export {
  errorCatch,
  axiosClassic, 
  axiosWithAuth,
  authService,
  EnumTokens,
  getAccessToken,
  saveTokenStorage,
  removeFromStorage,
  chatService,
  commentService,
  pageService,
  pageLinkService,
  todoService,
  userService,
  useAllUsers,
  useChat, 
  useChatById,
  useMyProfile,
  usePage,
  usePageLink,
  useUser
}