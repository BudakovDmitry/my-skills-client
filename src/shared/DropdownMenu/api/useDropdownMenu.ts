import { authService } from '@/shared/api';

export const useDropdownMenu = () => {
  const logoutHandler = async () => {
    const response = await authService.logout()

    if (response) {
      window.location.reload()
    }
  }

  return {
    logoutHandler
  }
}