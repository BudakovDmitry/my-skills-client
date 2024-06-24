import Header from "@/widgets/ui/Header";
import Footer from "@/widgets/ui/Footer";
import Link from "next/link";
import Image from "next/image";

import logoImage from '@/../public/logo.png';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className='flex-1 flex flex-col items-center justify-center'>
        {/* <Content name='Home' /> */}

        <Image className='mb-3 size-26' src={logoImage} alt='Logo' />
        <h1 className='text-6xl font-bold mb-6 js--title'>My skills</h1>
        <p className='text-md lg:text-base text-gray-500 font-medium max-w-2xl text-center leading-8 mb-10'>Платформа, створена для ефективного представлення та просування ваших професійних навичок у цифровому
          світі.</p>
        <div>
          <Link className='mx-4 font-semibold px-6 py-3 text-white bg-sky-500 rounded-md' href='/login'>Почати</Link>
          <Link className='mx-4 font-semibold hover:border-b hover:border-black transition ease-out' href='/about-platform'>Дізнатися більше &#x2794;</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;