import Image from "next/image";
import Link from "next/link";
import logo from '@/../public/logo.png'
import RegistrationForm from "@/components/forms/RegistrationForm/RegistrationForm";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Реєстрація',
  description: 'Реєстрація',
};

const Registration = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="flex justify-center min-h-screen">
            <div className="hidden bg-cover lg:block lg:w-2/5 bg-[url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')]">
            </div>

            <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                <div className="w-full">
                    <h1 className="flex items-center text-2xl font-semibold tracking-wider text-gray-800 dark:text-white">
                      <Image className="w-auto h-12 mr-4" src={logo} alt="Logo" />
                      Отримайте безкоштовний обліковий запис зараз.
                    </h1>

                    <p className="mt-4 text-gray-500 dark:text-gray-400">
                        Давайте все налаштуємо, щоб ви могли підтвердити свій особистий обліковий запис і розпочати налаштування профілю.
                    </p>

                    <RegistrationForm />
                    <p className="mt-6 text-sm text-center text-gray-400">Маєте акаунт? <Link href="/login" className="text-blue-500 focus:outline-none focus:underline hover:underline">Увійдіть</Link></p>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Registration;