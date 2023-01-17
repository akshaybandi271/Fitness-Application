import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import EvolveText from "@/assets/EvolveText.png"

type Props = {}

const ContactUs = (props: Props) => {
  return (
    <section className="relative">
      <div className="my-6 ml-32">
        <h2 className="mb-2 font-montserrat text-3xl font-bold uppercase">
          <span className="text-primary-500 ">join now</span> to get in shape
        </h2>
        <p className="max-w-[750px]">
          Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
          sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing
          leo egestas nisi elit risus sit. Nunc cursus sagittis.
        </p>
      </div>

      <div className="my-20  flex flex-col items-center gap-10 md:flex-row md:justify-center">
        <form className="max-w-[800px] mx-4">
          <input
            className="my-4 h-12 w-full rounded-md bg-primary-300 px-2 text-white placeholder-white placeholder:uppercase"
            type="text"
            placeholder="Name"
          />
          <input
            className="my-4 h-12 w-full rounded-md bg-primary-300 px-2 text-white placeholder-white placeholder:uppercase "
            type="email"
            placeholder="Email"
          />
          <textarea
            className="my-4 h-32 w-full resize-none rounded-md bg-primary-300 px-2 py-2 text-white placeholder-white placeholder:uppercase "
            placeholder="message"
          ></textarea>
          <button
            className="block rounded-md bg-secondary-500 px-10 py-2 uppercase"
            type="submit"
          >
            submit
          </button>
        </form>

        <div className="">
          <img src={ContactUsPageGraphic} alt="" className="max-w-[800px]" />
        </div>
      </div>
      <img src={EvolveText} alt="" className="hidden md:max-w-[600px] md:block md:absolute md:right-6 md:-bottom-10" />
    </section>
  )
}
export default ContactUs
