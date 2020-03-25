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
      <Head>
        <title>Manchester United</title>
      </Head>
      <Sidebar />
      <MainpageComponent>
        <div tw="text-6xl mt-3 text-center text-gray-100 font-bold">
          MANCHESTER UNITED
        </div>
        <div tw="flex flex-wrap m-20 p-20 bg-gray-200 rounded-lg shadow-lg text-center justify-center items-center text-4xl font-semibold text-gray-900">
          <blockquote>
            “I feel close to the rebelliousness and vigour of the youth here.
            Perhaps time will separate us, but nobody can deny that here, behind
            the windows of Manchester, there is an insane love of football, of
            celebration and of music.” - <cite>Eric Cantonna</cite>
          </blockquote>
        </div>
      </MainpageComponent>
    </div>
  )
}

export default Index
