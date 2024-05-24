import Image, { StaticImageData } from "next/image";

import nodejsIcon from '@/../public/nodejs.png';
import mongodbIcon from '@/../public/mongodb.png';
import typescriptIcon from '@/../public/typescript.png';
import nextjsIcon from '@/../public/nextjs.png';
import reactIcon from '@/../public/react.png';
import tailwindcssIcon from '@/../public/tailwindcss.png';

const technologies = [
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

type technologyItem = {
    id: number,
    name: string,
    version: string,
    icon: StaticImageData
}

const OurTechnologies = () => {
    return (
        <div className='flex-1 flex flex-col items-center justify-center'>
            <div className='grid grid-cols-3 gap-4 w-full container'>
                {technologies.map((item: technologyItem) => {
                    return (
                        <div key={item.id} className='bg-gray-200 flex items-center w-full px-6 py-4 rounded transform transition-transform duration-300 hover:-translate-y-2'>
                            <Image className='mr-4' src={item.icon} alt={item.name} />
                            <div>
                                <h4 className='font-bold'>{item.name}</h4>
                                <p className='text-gray-500 text-sm'>{item.version}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default OurTechnologies;