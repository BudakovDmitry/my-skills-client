import Image from "next/image";
import logoImage from '@/../public/logo.png'
import userIcon from '@/../public/user.png'
import doneIcon from '@/../public/done.png'

const AboutPlatformPage = () => {
  return (
    <div className='flex flex-col items-center py-6 container px-4 lg:px-0 mx-auto'>
      <div className='flex items-center mb-10'>
        <Image className='mr-4' src={logoImage} alt='Logo' />
        <h2 className='font-bold text-4xl'>My skills</h2>
      </div>
      <p className='font-medium text-gray-500 mb-16 text-center lg:text-start'>Твоя експертиза та твої навички, то твоя сила! А наші люди тому доказ.</p>
      <p className='text-gray-500 mb-16 text-center w-full lg:w-2/3 leading-8'>"My skills" - це інноваційна платформа, створена для ефективного представлення та просування ваших професійних навичок у цифровому світі. Наші зручні користувацькі профілі призначені допомогти вам виділити свій досвід та експертизу в різних сферах. А допоможуть нам у цьому ваші колеги.</p>
      <div className='bg-gray-200 px-8 py-6 w-full lg:w-2/3 ml-auto mb-10 rounded flex items-center'>
        <Image className='mr-10' src={userIcon} alt='User' />
        <div>
          <h5 className='font-medium text-gray-500 mb-4'>Особисті профілі</h5>
          <p className='text-gray-500 text-xs leading-6'>Створіть унікальний профіль, де будуть відображатися ключові навички та робочий досвід. Це ваша цифрова візитка, яка представляє вас у кращому світлі.</p>
        </div>
      </div>
      <div className='bg-gray-200 px-8 py-6 w-full lg:w-2/3 mb-10 mr-auto flex items-center rounded'>
        <div className='mr-10'>
          <h5 className='font-medium text-gray-500 mb-4'>Особисті профілі</h5>
          <p className='text-gray-500 text-xs leading-6'>Створіть унікальний профіль, де будуть відображатися ключові навички та робочий досвід. Це ваша цифрова візитка, яка представляє вас у кращому світлі.</p>
        </div>
        <Image src={doneIcon} alt='doneIcon' />
      </div>
    </div>
  )
}

export default AboutPlatformPage;