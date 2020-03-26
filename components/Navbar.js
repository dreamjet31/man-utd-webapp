import tw from "twin.macro"
import styled from "@emotion/styled/macro"

import MUFCLogo from "../public/MUFCLogo"

const Navbar = () => {
  return (
    <div tw="flex flex-row sm:flex-col bg-gray-900">
      <div tw="bg-red-500 self-center">
        <MUFCLogo />
      </div>
      <div tw="flex flex-row flex-wrap justify-center items-center w-screen sm:flex-col sm:w-full sm:my-auto bg-yellow-500">
        <div tw="px-2 py-1"> Home </div>
        <div tw="px-2 py-1"> About </div>
        <div tw="px-2 py-1"> Players </div>
        <div tw="px-2 py-1"> Trophies </div>
        <div tw="px-2 py-1"> News </div>
      </div>
    </div>
  )
}

export default Navbar
