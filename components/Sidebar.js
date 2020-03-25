import tw from "twin.macro"
import styled from "@emotion/styled/macro"
import MUFCLogo from "../public/MUFCLogo"

const SidebarComponent = styled.div(
  tw`min-h-screen w-1/6 bg-gray-900 text-2xl text-gray-400`
)

const Sidebar = () => {
  return (
    <SidebarComponent>
      <section tw="flex flex-col min-h-screen justify-center items-center justify-between">
        <div tw="mt-6">
          <MUFCLogo />
        </div>
        <div>
          <div> Home </div>
          <div> About </div>
          <div> Players </div>
          <div> Trophies </div>
          <div> News </div>
        </div>
        <div tw="px-6 mb-6 text-xs text-gray-400 text-justify">
          All copyrights belong to Manchester United Football Club and the
          respective players.
        </div>
      </section>
    </SidebarComponent>
  )
}

export default Sidebar
