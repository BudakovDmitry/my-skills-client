import { NextRequest, NextResponse } from "next/server";
import { EnumTokens } from "@/shared/api";
import { PAGE } from "./shared/config";

export const middleware = async (request: NextRequest, response: NextResponse) => {
  const { url, cookies } = request

  const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

  const isLoginPage = url.includes(PAGE.LOGIN)
  const isRegistrationPage = url.includes(PAGE.REGISTRATION)
  const isProfilePage = url.includes(PAGE.PROFILE)
  const isChatsPage = url.includes(PAGE.CHATS)

  if ((isLoginPage || isRegistrationPage) && refreshToken) {
    return NextResponse.redirect(new URL(PAGE.HOME, url))
  }

  if (isLoginPage || isRegistrationPage) {
    return NextResponse.next()
  }

  if ((isProfilePage || isChatsPage) && !refreshToken) {
    return NextResponse.redirect(new URL(PAGE.HOME, url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*']
}
