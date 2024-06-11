import Link from 'next/link'

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center flex-1 min-h-screen'>
            <h2 className='text-9xl	font-bold text-sky-500 mb-6'>404</h2>
            <h3 className='text-4xl font-bold mb-4'>Чогось не вистачає</h3>
            <p className='text-gray-500 mb-6 max-w-xl text-center'>Вибачте, ми не можемо знайти цю сторінку. Але на домашній сторінці ви знайдете багато цікавого</p>
            <Link className='mx-2 px-6 py-2 text-white bg-sky-500 rounded-md font-bold' href="/">Назад на головну сторінку</Link>
        </div>
    )
}

export default NotFound;