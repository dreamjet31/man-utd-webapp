import React from "react"
import tw from "twin.macro"
import styled from "@emotion/styled/macro"
import { css } from "@emotion/core"
import Head from "next/head"

const SidebarComponent = styled.div(
  tw`min-h-screen w-1/6 bg-gray-900 text-gray-100`
)
const MainpageComponent = styled.div(
  tw`min-h-screen w-5/6 bg-gray-100 text-gray-900`
)

const MyButton = styled.button(tw`font-bold text-lg p-2 bg-red-900`)

const Index = () => {
  return (
    <div tw="mx-auto">
      <Head>
        <title>Manchester United</title>
      </Head>
      <div tw="flex flex-wrap flex-row min-h-screen">
        <SidebarComponent> SIDEBAR </SidebarComponent>
        <MainpageComponent> MAINPAGE </MainpageComponent>
      </div>
    </div>
  )
}

export default Index
