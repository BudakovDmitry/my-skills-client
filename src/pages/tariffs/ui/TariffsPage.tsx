'use client'

import { TariffCard } from "@/widgets/TariffCard"

const TarrifsPage = () => {
  return (
    <div className='flex-1 flex flex-col items-center mt-2 mb-14'>
      <section className="relative z-50 w-4/5 mx-auto">
        <div className="container">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="md:text-5xl text-3xl font-medium tracking-tight mt-7 text-center">Тарифи</h2>
            <div className="w-10 mx-auto mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 h-[2px]"></div>
            <p className="mt-6 text-xl/8 text-gray-600 dark:text-gray-400">Виберіть план, який найкраще відповідає вашим потребам, і насолоджуйтесь творчим процесом мозкового штурму вашого нового проекту.</p>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-20">
            <TariffCard name='BASIC' cost={49}>
              <ul className="mb-10 text-center">
                <li className="my-4">
                  <h5 className="font-medium dark:text-gray-300">10k Visitors/mo</h5>
                </li>
                <li>
                  <h5 className="font-medium dark:text-gray-300">10 Funnels, 50 Pages</h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium dark:text-gray-300">Unlimited Transactions</h5>
                </li>
                <li>
                  <h5 className="font-medium dark:text-gray-300">Analytics</h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium dark:text-gray-300">lnstegrations</h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium text-gray-500 line-through dark:text-gray-300">Audience Date</h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium text-gray-500 line-through dark:text-gray-300">Premium templates</h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium text-gray-500 line-through dark:text-gray-300">White Labelling</h5>
                </li>
              </ul>
            </TariffCard>
            <TariffCard name='PREMIUM' cost={69}>
              <ul className="mb-10 text-center">
                <li className="my-4">
                  <h5 className="font-medium dark:text-gray-300">10k Visitors/mo</h5>
                </li>
                <li>
                  <h5 className="font-medium dark:text-gray-300">10 Funnels, 50 Pages</h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium dark:text-gray-300">Unlimited Transactions</h5>
                </li>
                <li>
                  <h5 className="font-medium dark:text-gray-300">Analytics</h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium dark:text-gray-300">lnstegrations</h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium dark:text-gray-300">Audience Date</h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium dark:text-gray-300">Premium templates</h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium text-gray-500 line-through dark:text-gray-300">White Labelling</h5>
                </li>
              </ul>
            </TariffCard>
            <TariffCard name='ULTIMATE' cost={89}>
              <ul className="mb-10 text-center">
                <li className="my-4">
                  <h5 className="font-medium dark:text-gray-300">10k Visitors/mo</h5>
                </li>
                <li>
                  <h5 className="font-medium dark:text-gray-300">10 Funnels, 50 Pages</h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium dark:text-gray-300">Unlimited Transactions</h5>
                </li>
                <li>
                  <h5 className="font-medium dark:text-gray-300">Analytics</h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium dark:text-gray-300">lnstegrations</h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium dark:text-gray-300">Audience Date</h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium dark:text-gray-300">Premium templates</h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium dark:text-gray-300">White Labelling</h5>
                </li>
              </ul>
            </TariffCard>
          </div>
          <h5 className="text-center font-medium mt-14">lnterested in a custom plan? <a href="#" className="text-sky-500">Get in touch</a></h5>
        </div>
      </section >
    </div>
  )
}

export default TarrifsPage