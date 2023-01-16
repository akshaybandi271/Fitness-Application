import Logo from "@/assets/Logo.png"

type Props = {}

// complete the footer the your desktop version finished
// then Make responsive and then add Framer Motion to the applications
// And Compare with the compare interms of code.

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 flex items-center justify-center py-10 gap-4">
      <div className="max-w-[600px]">
        <img src={Logo} alt="" />
        <p className="my-4">
          Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
          purus et arcu massa dictum condimentum. Augue scelerisque iaculis orci
          ut habitant laoreet. Iaculis tristique.
        </p>
        <p>© Evogym All Rights Reserved.</p>
      </div>

      <div>
        <p className="font-bold">Links</p>
        <ul>
          <li className="my-2">Massa orci senectus</li>
          <li className="my-2">Et gravida id et etiam</li>
          <li className="my-2">Ullamcorper vivamus</li>
        </ul>
      </div>

      <div>
        <p className="font-bold">Contact Us</p>
        <ul>
          <li className="my-2">Tempus metus mattis risus volutpat egestas.</li>
          <li className="my-2">(333)425-6825</li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer
