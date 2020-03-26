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
        <div tw="overflow-auto h-screen w-full">
          <div tw="bg-green-500 p-5 h-screen ">
            <div tw="text-6xl mt-3 text-center text-gray-100 font-bold">
              MANCHESTER UNITED
            </div>
          </div>
          <div tw="bg-yellow-500 p-5 h-screen "> LMAO </div>
          <div tw="bg-red-500 p-5 h-screen "> LMAO </div>
        </div>
      </div>
    </div>
  )
}

export default Index
