import Image from "next/image";

import facebook from '@/../public/facebook.png'
import github from '@/../public/github.png'
import instagram from '@/../public/instagram.png'
import linkedIn from '@/../public/linkedin.png'
import { IUserLinks } from "@/types/types";

type SocialLinksProps = {
  links: IUserLinks
}

const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <>
      {
        links.facebook ? (
          <a href={links.facebook} target="_blank" className="mx-1 w-6 h-6">
            <Image src={facebook} alt="Facebook" />
          </a>
        ) : null
      }

      {
        links.github ? (
          <a href={links.github} target="_blank" className="mx-1 w-6 h-6">
            <Image src={github} alt="Github" />
          </a>
        ) : null
      }
      {
        links.instagram ? (
          <a href={links.instagram} target="_blank" className="mx-1 w-6 h-6">
            <Image src={instagram} alt="Instagram" />
          </a>
        ) : null
      }

      {
        links.linkedIn ? (
          <a href={links.linkedIn} target="_blank" className="mx-1 w-6 h-6">
            <Image src={linkedIn} alt="LinkedIn" />
          </a>
        ) : null
      }
    </>
  )
}

export default SocialLinks