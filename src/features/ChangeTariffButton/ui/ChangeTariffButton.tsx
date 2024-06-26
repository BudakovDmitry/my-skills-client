import { useChangeTariffButton } from "../api/useChangeTariffButton";

const ChangeTariffButton = ({ newPlan }: { newPlan: string }) => {
  const { handleChangePlan } = useChangeTariffButton()

  return (
    <button
      onClick={() => handleChangePlan(newPlan)}
      className={`py-3 px-6 font-medium border rounded-md border-sky-500 ${newPlan === 'PREMIUM' ? 'bg-sky-500 text-white hover:bg-white hover:text-sky-500' : 'bg-white text-sky-500 hover:bg-sky-500 hover:text-white'}`}
    >
      Get Pro
    </button>
  )
}

export default ChangeTariffButton;