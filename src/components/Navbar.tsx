import Logo from "@/assets/Logo.png"

const Navbar = () => {
  const flexAlign = `flex items-center`

  return (
    <nav className={`${flexAlign} justify-center pt-6`}>
      <img src={Logo} alt="logo" className="mr-20 w-28" />

      <div className={`${flexAlign} w-2/3 justify-between`}>
        <ul className={`${flexAlign} gap-6`}>
          <li>Home</li>
          <li>Benefits</li>
          <li>Our Classes</li>
          <li>Contact us</li>
        </ul>

        <div className={`${flexAlign} gap-6`}>
          <p>Sign In</p>
          <a href="#" className=" rounded-md bg-secondary-500 px-8 py-2">
            Become a Memeber
          </a>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
