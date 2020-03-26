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
    background: linear-gradient(#9b2c2c, #1a202c);
    * {
      ${tw`mt-6`}
    }
  `
)

const Index = () => {
  return (
    <div tw="mx-auto">
      <div tw="flex min-h-screen">
        <Head>
          <title>Manchester United</title>
        </Head>
      </div>
    </div>
  )
}

export default Index
