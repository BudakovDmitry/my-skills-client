import { StaticImageData } from "next/image";
import nodejsIcon from '@/../public/nodejs.png';
import mongodbIcon from '@/../public/mongodb.png';
import typescriptIcon from '@/../public/typescript.png';
import nextjsIcon from '@/../public/nextjs.png';
import reactIcon from '@/../public/react.png';
import tailwindcssIcon from '@/../public/tailwindcss.png';

export const technologies = [
  {
    id: 0,
    name: 'NodeJS',
    version: 'v18.20.0',
    icon: nodejsIcon
  },
  {
    id: 1,
    name: 'MongoDB',
    version: 'з Mongoose',
    icon: mongodbIcon
  },
  {
    id: 2,
    name: 'TypeScript',
    version: 'v5.3.3',
    icon: typescriptIcon
  },
  {
    id: 3,
    name: 'Next.js',
    version: '14.0.4',
    icon: nextjsIcon
  },
  {
    id: 4,
    name: 'React',
    version: 'v18.2.0',
    icon: reactIcon
  },
  {
    id: 5,
    name: 'Tailwind CSS',
    version: 'v3.4.0',
    icon: tailwindcssIcon
  },
]

