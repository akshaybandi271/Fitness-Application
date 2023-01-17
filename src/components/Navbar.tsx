import Logo from "@/assets/Logo.png"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleNav = () => {
    setIsNavOpen((prevState) => !prevState)
  }

  const flexAlign = `flex items-center`
  return (
    <nav
      className={`${flexAlign} justify-between overflow-hidden px-10 pt-6 md:justify-start`}
    >
      <img
        src={Logo}
        alt="logo"
        className="mr-20 w-[100px] md:mx-0 md:w-[100px]"
      />

      <div
        className={`absolute top-0 right-0 flex h-screen flex-col bg-primary-100 pr-10 pl-4 pt-10 
          md:relative md:h-20 md:w-5/6 md:translate-x-0 md:flex-row  md:items-center md:justify-between md:bg-inherit md:px-0 md:py-0 ${
            isNavOpen ? "translate-x-0" : "translate-x-[320px]"
          } transition duration-1000 `}
      >
        <button onClick={handleNav}>
          <XMarkIcon className="absolute top-6 right-6 h-6 md:hidden" />
        </button>

        <ul className={`${flexAlign}  mb-6 flex-col gap-6 md:mb-0 md:flex-row`}>
          <li>Home</li>
          <li>Benefits</li>
          <li>Our Classes</li>
          <li>Contact us</li>
        </ul>

        <div className={`${flexAlign} flex-col gap-6 md:flex-row`}>
          <p>Sign In</p>
          <a href="#" className=" rounded-md bg-secondary-500 px-8 py-2">
            Become a Memeber
          </a>
        </div>
      </div>

      <button
        className="rounded-full bg-secondary-400 px-2 py-2 text-white md:hidden"
        onClick={handleNav}
      >
        <Bars3Icon className="z-[1] h-6" />
      </button>
    </nav>
  )
}
export default Navbar
