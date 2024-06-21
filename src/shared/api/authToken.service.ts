import Cookies from 'js-cookie';

enum EnumTokens {
  'ACCESS_TOKEN' = 'accessToken',
  'REFRESH_TOKEN' = 'refreshToken'
}

const getAccessToken = () => {
  const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)

  return accessToken || null
}

const saveTokenStorage = (accessToken: string) => {
  Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
    domain: 'localhost',
    sameSite: 'strict',
    expires: 1
  })
}

const removeFromStorage = () => {
  Cookies.remove(EnumTokens.ACCESS_TOKEN)
}

export {
  EnumTokens,
  getAccessToken,
  saveTokenStorage,
  removeFromStorage
}