import { AppProviders } from "@/app/providers"
import { PropsWithChildren } from "react"

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <AppProviders>{children}</AppProviders>
  )
}