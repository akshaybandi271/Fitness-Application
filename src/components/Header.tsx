import Navbar from "./Navbar"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import HomePageText from "@/assets/HomePageText.png"
import EvolveText from "@/assets/EvolveText.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import SponsorRedBull from "@/assets/SponsorRedbull.png"

type Props = {}

const Header = (props: Props) => {
  // Implement Selected Page state

  return (
    <header>
      <Navbar />
      <section className="flex items-center">
        <div className=" relative ml-10">
          <img src={EvolveText} alt="" className="" />
          <img src={HomePageText} alt="" className="absolute top-20 left-16" />
          <div className="ml-16">
            <p className="mt-32 mb-10 max-w-[550px]">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
            <a href="#" className=" mr-4 rounded-md bg-secondary-500 px-8 py-2">
              Join Now
            </a>
            <a href="#" className="font-bold text-primary-500 underline">
              Learn More
            </a>
          </div>
        </div>
        <img className=" mt-10 w-[550px]" src={HomePageGraphic} alt="" />
      </section>
      <section className="flex items-center justify-between bg-primary-100 px-28 py-10">
        <img src={SponsorForbes} alt="" />
        <img src={SponsorFortune} alt="" />
        <img src={SponsorRedBull} alt="" />
      </section>
    </header>
  )
}

export default Header
