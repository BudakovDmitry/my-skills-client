import Image from "next/image";
import Link from "next/link";
import logo from '@/../public/logo.png'
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
      <div className="hidden bg-cover lg:block lg:w-1/2 bg-[url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')]"></div>

      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div className="flex justify-center mx-auto">
          <Image className="w-auto h-7 sm:h-8" src={logo} alt="Logo" />
        </div>

        <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
          З поверненням!
        </p>

        <LoginForm />

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

          <Link href="/registration" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">або зареєструйтесь</Link>

          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>

        <div className="flex items-center justify-end mt-4 ">
          <Link href="/" className="text-xs text-gray-700 font-bold uppercase dark:text-gray-400 hover:underline">На головну</Link>
        </div>

      </div>
    </div>
  );
}

export default LoginPage;