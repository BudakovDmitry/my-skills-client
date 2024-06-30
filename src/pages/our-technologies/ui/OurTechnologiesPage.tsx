import Image from "next/image";
import { technologies } from '../model'
import { TechnologyItem } from '../model/types'

const OurTechnologiesPage = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='grid grid-col-1 lg:grid-cols-3 gap-4 w-full container px-4 lg:p-0'>
        {technologies.map((item: TechnologyItem) => {
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

export default OurTechnologiesPage;