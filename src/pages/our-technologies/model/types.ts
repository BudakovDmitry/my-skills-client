import { StaticImageData } from "next/image"

export type TechnologyItem = {
  id: number,
  name: string,
  version: string,
  icon: StaticImageData
}