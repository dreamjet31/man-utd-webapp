import tw from "twin.macro"
import styled from "@emotion/styled/macro"
import MUFCLogo from "../public/MUFCLogo"

const SidebarComponent = styled.div(
  tw`flex-none flex-col min-h-screen w-1/6 items-center justify-between bg-gray-500`
)

// tw="flex-none flex-col min-h-screen items-center justify-between"

const Sidebar = () => {
  return (
    <SidebarComponent>
      <div tw="bg-green-500">
        <MUFCLogo />
      </div>
      <div tw="bg-yellow-500">
        <div> Home </div>
        <div> About </div>
        <div> Players </div>
        <div> Trophies </div>
        <div> News </div>
      </div>
      <div tw="bg-red-500">
        All image copyrights belong to Manchester United Football Club and the
        respective players. Website developed by Akshaj Verma.
      </div>
    </SidebarComponent>
  )
}

export default Sidebar
