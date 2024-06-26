'use client'

import { ChangeTariffButton } from "@/features/ChangeTariffButton";

const TariffCard = ({ name, cost, children }: { name: string, cost: number, children: any }) => {
  if (name === 'PREMIUM') {
    return (
      <div className="relative z-20 hover:bg-slate-100 ease-out hover:-translate-y-6 transition-all">
        <div className="absolute top-0 inset-x-0">
          <div className="flex justify-center">
            <span className="text-xs font-medium uppercase border border-gray-700 text-white bg-black px-4 py-2 rounded-md -mt-4">most popular</span>
          </div>
        </div>
        <div className="group">
          <div className="border rounded-xl border-gray-300 bg-white hover:bg-slate-100 dark:border-gray-700 dark:bg-neutral-900">
            <div className="text-center">
              <div className="flex flex-col">
                <div className="text-center pt-10">
                  <h5 className="text-xl font-semibold">{name}</h5>
                  <h2 className="text-5xl mt-8 mb-3 items-center align-middle font-bold">
                    <sup className="text-2xl align-middle">$</sup>{cost}
                  </h2>
                  <span>per user, per month</span>
                </div>

                <div className="p-10">
                  {children}
                  <div className="flex justify-center">
                    <ChangeTariffButton newPlan={name} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-neutral-300/30 rounded-xl dark:bg-neutral-700 h-full left-0 top-0 w-full translate-x-2 translate-y-2 -z-10"></div>
        </div>
      </div>
    )
  }
  return (
    <div className="flex flex-col border border-gray-300 rounded-xl overflow-hidden dark:border-gray-700 hover:bg-slate-100 ease-out hover:-translate-y-6 transition-all">
      <div className="text-center pt-10">
        <h5 className="text-xl font-semibold">{name}</h5>
        <h2 className="text-5xl mt-8 mb-3 items-center align-middle font-bold">
          <sup className="text-2xl align-middle">$</sup>{cost}
        </h2>
        <span>per user, per month</span>
      </div>

      <div className="p-10">
        {children}
        <div className="flex justify-center">
          <ChangeTariffButton newPlan={name} />
        </div>
      </div>
    </div>
  );
}

export default TariffCard;