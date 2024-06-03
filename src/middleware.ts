import { NextRequest, NextResponse } from "next/server";
import { EnumTokens } from "./services/authToken.service";
import { PAGE } from "./config/pages-url.config";

export const middleware = async (request: NextRequest, response: NextResponse) => {
  const { url, cookies } = request

  const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

  const isLoginPage = url.includes(PAGE.LOGIN)
  const isRegistrationPage = url.includes(PAGE.REGISTRATION)
  const isProfilePage = url.includes(PAGE.PROFILE)

  if ((isLoginPage || isRegistrationPage) && refreshToken) {
    return NextResponse.redirect(new URL('/', url))
  }

  if (isLoginPage || isRegistrationPage) {
    return NextResponse.next()
  }

  if (isProfilePage && !refreshToken) {
    return NextResponse.redirect(new URL(PAGE.HOME, url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*']
}
