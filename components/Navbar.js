import tw from "twin.macro"
import styled from "@emotion/styled/macro"

import MUFCLogo from "../public/MUFCLogo"

const Navbar = () => {
  return (
    <div tw="flex flex-row my-auto sm:my-0 sm:flex-col sm:w-1/6 bg-gray-900">
      <div tw="self-center">
        <MUFCLogo />
      </div>
      <div tw="flex flex-row flex-wrap justify-center items-center sm:flex-col sm:w-full sm:my-auto text-yellow-500 text-2xl">
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
