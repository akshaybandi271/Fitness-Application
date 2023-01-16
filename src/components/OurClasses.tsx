import { ClassesType } from "@/types"
import { useState } from "react"
import { classesContent } from "@/constant"

type Props = {}

const OurClasses = (props: Props) => {
  return (
    <section className="overflow-y-hidden my-20 bg-primary-100 py-32">
      <div className="ml-40">
        <h2 className="text-3xl font-bold uppercase font-montserrat mb-4">
          our classes
        </h2>
        <p className="max-w-[700px] mb-10">
          Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
          tellus quam porttitor. Mauris velit euismod elementum arcu neque
          facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
          mattis odio in risus nunc.
        </p>
      </div>

      <div className="flex gap-4 w-[2300px] whitespace-nowrap overflow-x-auto px-10">
        {classesContent.map((content, index) => {
          return (
            <Image
              key={index}
              image={content.image}
              title={content.title}
              description={content.description}
            />
          )
        })}
      </div>
    </section>
  )
}

export default OurClasses

const Image = ({ image, title, description }: ClassesType) => {
  const [isHovering, setIsHovering] = useState(false)

  const handleHover = () => {
    setIsHovering(true)
  }
  const handleMouseOut = () => {
    setIsHovering(false)
  }

  return (
    <div
      className="text-white relative w-[400px]"
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
    >
      <img src={image} alt="" className="w-full" />
      {isHovering && (
        <div className="bg-primary-500 absolute inset-0 flex flex-col justify-center items-center">
          <h3 className="text-lg">{title}</h3>
          {description && <p>{description}</p>}
        </div>
      )}
    </div>
  )
}
