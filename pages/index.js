import React from "react"
import tw from "twin.macro"
import styled from "@emotion/styled/macro"
import { css } from "@emotion/core"
import Head from "next/head"

import MUFCLogo from "../public/MUFCLogo"

const SidebarComponent = styled.div(
  tw`min-h-screen w-1/6 bg-gray-900 text-gray-100`
)
const MainpageComponent = styled.div(
  tw`min-h-screen w-5/6 bg-gray-100 text-gray-900`
)

const Index = () => {
  return (
    <div tw="mx-auto">
      <Head>
        <title>Manchester United</title>
      </Head>
      <div tw="flex flex-wrap flex-row min-h-screen">
        <SidebarComponent>
          <div tw="flex flex-col justify-center h-full items-center justify-around">
            <div>
              <MUFCLogo />
            </div>
            <div>
              <div> Home </div>
              <div> About </div>
              <div> Players </div>
              <div> Trophies </div>
              <div> News </div>
            </div>
            <div tw="px-6 text-xs text-gray-400 text-justify">
              All copyrights belong to Manchester United Football Club and the
              respective players.
            </div>
          </div>
        </SidebarComponent>
        <MainpageComponent> MAINPAGE </MainpageComponent>
      </div>
    </div>
  )
}

export default Index
