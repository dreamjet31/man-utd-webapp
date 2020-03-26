import React from "react"
import tw from "twin.macro"
import styled from "@emotion/styled/macro"
import { css } from "@emotion/core"
import Head from "next/head"

import Navbar from "../components/Navbar"

const Index = () => {
  return (
    <div tw="mx-auto">
      <Head>
        <title>Manchester United</title>
      </Head>

      <div tw="flex flex-col sm:flex-row h-screen">
        <Navbar> Sidebar </Navbar>
        <div tw="overflow-auto h-screen w-5/6">
          <div
            css={[
              tw`bg-gray-500 p-1 h-screen`,
              css`
                background: linear-gradient(#742a2a, #1a202c);
              `
            ]}
          >
            <div tw="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-gray-100 font-bold">
              MANCHESTER UNITED
            </div>
          </div>
          <div
            css={[
              tw`bg-gray-500 p-1 h-screen`,
              css`
                background: linear-gradient(#1a202c, #cbd5e0);
              `
            ]}
          >
            CONTENTOF PAGE 2
          </div>
          <div
            css={[
              tw`bg-gray-500 p-1 h-screen`,
              css`
                background: linear-gradient(#cbd5e0, #ecc94b);
              `
            ]}
          >
            CONTENTOF PAGE 3
          </div>
          <div
            css={[
              tw`bg-gray-500 p-1 h-screen`,
              css`
                background: linear-gradient(#ecc94b, #48bb78);
              `
            ]}
          >
            CONTENTOF PAGE 3
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
