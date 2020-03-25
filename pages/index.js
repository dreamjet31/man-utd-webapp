import React from "react"
import tw from "twin.macro"
import styled from "@emotion/styled/macro"
import { css } from "@emotion/core"
import Head from "next/head"

import Sidebar from "../components/Sidebar"
import RedDevilsLogo from "../public/RedDevilsLogo"

const MainpageComponent = styled.div(
  tw`min-h-screen w-5/6 bg-gray-100 text-gray-900`,
  css`
    background: linear-gradient(#9b2c2c, #2d3748);
    * {
      ${tw`mt-6`}
    }
  `
)

const Index = () => {
  return (
    <div tw="flex min-h-screen mx-auto">
      <Sidebar />
      <MainpageComponent>
        <div tw="text-6xl mt-3 text-center text-gray-200 font-bold">
          MANCHESTER UNITED
        </div>
      </MainpageComponent>
      <section></section>
    </div>
  )
}

export default Index

{
  /* <Head>
<title>Manchester United</title>
</Head> */
}
