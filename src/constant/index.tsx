import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline"
import { BenefitType } from "@/types"
import { ClassesType } from "@/types"
import Image1 from "@/assets/image1.png"
import Image2 from "@/assets/image2.png"
import Image3 from "@/assets/image3.png"
import Image4 from "@/assets/image4.png"
import Image5 from "@/assets/image5.png"
import Image6 from "@/assets/image6.png"



const benefitsContent: BenefitType[] = [
  {
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    icon: <HomeModernIcon className="h-6 w-6" />,
  },
  {
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    icon: <UserGroupIcon className="h-6 w-6" />,
  },
  {
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    icon: <AcademicCapIcon className="h-6 w-6" />,
  },
]

export const classesContent: ClassesType[] = [
  {
    title: "Weight Training Classes",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Image1
  },
  {
    title: "Yoga Classes",
    image: Image2
  },
  {
    title: "Ab Core Classes",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Image3
  },
  {
    title: "Adventure Classes",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Image4
  },
  {
    title: "Fitness Classes",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Image5
  },
  {
    title: " Training Classes",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Image6
  },
]

export default benefitsContent
