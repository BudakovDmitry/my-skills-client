import { NextRequest, NextResponse } from "next/server";
import { EnumTokens } from "./services/authToken.service";

export const middleware = async (request: NextRequest, response: NextResponse) => {
  const { url, cookies } = request

  const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

  const isLoginPage = url.includes('/login')
  const isRegistrationPage = url.includes('/registration')
  const isProfilePage = url.includes('/my-profile')

  if ((isLoginPage || isRegistrationPage) && refreshToken) {
    return NextResponse.redirect(new URL('/', url))
  }

  if (isLoginPage || isRegistrationPage) {
    return NextResponse.next()
  }

  if (isProfilePage && !refreshToken) {
    return NextResponse.redirect(new URL('/', url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*']
}
