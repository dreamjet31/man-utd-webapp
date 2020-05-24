import tw from "twin.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitterSquare,
  faGithubSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const Navbar = () => {
  return (
    <div tw="flex flex-row my-auto justify-between overflow-auto sm:my-0 sm:flex-col sm:w-1/6 bg-gray-900">
      <div tw="self-center">
        <div tw="w-16 h-16 m-2 sm:p-2 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32">
          <img src={require("../public/images/mufc_logo.jpg")} />
        </div>
      </div>
      <div tw="flex flex-row flex-wrap justify-center items-center text-sm mx-auto text-yellow-500 sm:flex-col sm:text-base lg:text-lg ">
        <a tw="px-2 py-1" href="#home">
          Home
        </a>
        <a tw="px-2 py-1" href="#about">
          About
        </a>
        <a tw="px-2 py-1" href="#trophies">
          Trophies
        </a>
        <a tw="px-2 py-1" href="#players">
          Players
        </a>
        <a tw="px-2 py-1" href="#news">
          News
        </a>
      </div>
      <div tw="self-center m-2">
        <a href="https://twitter.com/theairbend3r" target="_blank">
          <FontAwesomeIcon tw="mx-1 text-gray-100" icon={faTwitterSquare} />
        </a>

        <a href="https://www.linkedin.com/in/akshajverma7" target="_blank">
          <FontAwesomeIcon tw="mx-1 text-gray-100" icon={faLinkedin} />
        </a>

        <a href="https://github.com/theairbend3r" target="_blank">
          <FontAwesomeIcon tw="mx-1 text-gray-100" icon={faGithubSquare} />
        </a>
      </div>
    </div>
  )
}

export default Navbar
