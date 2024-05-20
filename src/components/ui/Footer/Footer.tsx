import Image from "next/image";

import ukraineFlag from '@/../public/ukraine.png'

const Footer = () => {
    return (
        <footer className='py-4 flex items-center justify-center'>
            <div className='flex items-center border rounded-full py-2 px-4'>
                <Image src={ukraineFlag} alt='Ukraine' className='mr-2 size-7' />
                <p className='mr-2 text-gray-500'>Зробити внесок на рахунок фонду допомоги ЗСУ</p>
                <a href="#" className='font-semibold text-sky-500 hover:underline transition ease-out'>Підтримати</a>
            </div>
        </footer>
    )
}

export default Footer;