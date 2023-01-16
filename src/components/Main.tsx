import Benefits from "./Benefits"
import benefitsContent from "@/constant"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import AbstractWaves from "@/assets/AbstractWaves.png"
import Sparkles from "@/assets/Sparkles.png"
import OurClasses from "./OurClasses"
import ContactUs from "./ContactUs"

type Props = {}

const Main = (props: Props) => {
  return (
    <main>
      <section className="my-14">
        <div className="ml-36">
          <h2 className="font-montserrat text-3xl font-bold uppercase ">
            more than just gym.
          </h2>
          <p>
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease.
          </p>
          <p>We provide true care into each and every member.</p>
        </div>
        <div className="my-10 flex justify-center gap-10">
          {benefitsContent.map((benefit, index) => {
            return (
              <Benefits
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            )
          })}
        </div>
      </section>

      <section className="relative flex items-center justify-center gap-16">
        <img src={BenefitsPageGraphic} alt="" />
        <img
          className="absolute top-10 left-[600px]"
          src={AbstractWaves}
          alt=""
        />

        <div className="max-w-[650px]">
          <h2 className="font-montserrat text-3xl font-bold uppercase">
            millions of happy members getting{" "}
            <span className=" text-primary-500">fit</span>
          </h2>
          <img src={Sparkles} alt="" className=" absolute bottom-4 right-44" />
          <p className="my-4">
            Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas
            ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae
            vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat
            sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id
            pretium sapien proin integer nisl. Felis orci diam odio.
          </p>
          <p className="mb-10">
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
            tellus quam porttitor. Mauris velit euismod elementum arcu neque
            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
            mattis odio in risus nunc.
          </p>
          <a href="#" className=" rounded-lg bg-secondary-500 px-8 py-2">
            Join Now
          </a>
        </div>
      </section>

      <OurClasses />
      <ContactUs />
    </main>
  )
}

export default Main
