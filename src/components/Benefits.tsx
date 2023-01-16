import { BenefitType } from "@/types"

const Benefits = ({ title, description, icon }: BenefitType) => {
  return (
    <div className="flex h-72 max-w-[350px] flex-col items-center justify-center rounded-sm border-[2px] border-gray-50 px-4 text-center">
      <div className="rounded-full border-[2px] border-gray-100 bg-primary-100 px-4 py-4">
        {icon}
      </div>
      <h3 className="my-2 font-bold">{title}</h3>
      <p className="mb-4">{description}</p>
      <a href="#" className="font-bold text-primary-500 underline">
        Learn more
      </a>
    </div>
  )
}
export default Benefits
