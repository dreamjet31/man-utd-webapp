import React from "react"
import tw from "twin.macro"
import styled from "@emotion/styled/macro"
import { css } from "@emotion/core"
import Head from "next/head"

import Navbar from "../components/Navbar"
import MainPage from "../components/MainPage"
import RedDevilsImage from "../components/images/RedDevilsImage"

const Index = () => {
  return (
    <div tw="mx-auto">
      <Head>
        <title>Manchester United</title>
      </Head>

      <div tw="flex flex-col sm:flex-row h-screen">
        <Navbar> Sidebar </Navbar>
        <div tw="overflow-auto h-screen w-full">
          <MainPage colour1="#742a2a" colour2="#1a202c">
            <div tw="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-gray-100 font-bold">
              MANCHESTER UNITED
            </div>
            <RedDevilsImage />
          </MainPage>

          <MainPage colour1="#1a202c" colour2="#cbd5e0">
            <div tw="flex flex-col h-full justify-center sm:flex-row sm:flex-wrap sm:overflow-auto sm:justify-around sm:items-center">
              <div tw="h-24 m-2 sm:h-48 sm:m-2 sm:w-64 md:h-56 md:w-72 lg:h-64 lg:w-96 bg-gray-200 rounded shadow-lg">
                lmao
              </div>
              <div tw="h-24 m-2 sm:h-48 sm:m-2 sm:w-64 md:h-56 md:w-72 lg:h-64 lg:w-96 bg-gray-200 rounded shadow-lg">
                lmao
              </div>
              <div tw="h-24 m-2 sm:h-48 sm:m-2 sm:w-64 md:h-56 md:w-72 lg:h-64 lg:w-96 bg-gray-200 rounded shadow-lg">
                lmao
              </div>
              <div tw="h-24 m-2 sm:h-48 sm:m-2 sm:w-64 md:h-56 md:w-72 lg:h-64 lg:w-96 bg-gray-200 rounded shadow-lg">
                lmao
              </div>
            </div>
          </MainPage>

          <MainPage colour1="#cbd5e0" colour2="#ecc94b">
            PAGE 3
          </MainPage>

          <MainPage colour1="#ecc94b" colour2="#48bb78">
            PAGE 4
          </MainPage>
        </div>
      </div>
    </div>
  )
}

export default Index
