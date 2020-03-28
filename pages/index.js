import React from "react"
import tw from "twin.macro"
import styled from "@emotion/styled/macro"
import { css } from "@emotion/core"
import Head from "next/head"

import Navbar from "../components/Navbar"
import MainPage from "../components/MainPage"

const CardsVertical = props => {
  return (
    <div tw="flex flex-1 flex-col justify-between">
      <div tw="flex-shrink-0 mx-2 my-auto p-2 h-32 w-64 md:h-40 md:w-84 lg:h-48 w-96 rounded bg-gray-200">
        lmao
      </div>
      <div tw="flex-shrink-0 mx-2 my-auto p-2 h-32 w-64 md:h-40 md:w-84 lg:h-48 w-96 rounded bg-gray-200">
        lmao
      </div>
      <div tw="flex-shrink-0 mx-2 my-auto p-2 h-32 w-64 md:h-40 md:w-84 lg:h-48 w-96 rounded bg-gray-200">
        lmao
      </div>
    </div>
  )
}

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
            <div tw="p-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-gray-100 font-bold">
              MANCHESTER UNITED
            </div>
            <div tw="mx-auto mt-20 sm:mt-24 md:mt-32 lg:mt-48">
              <img
                tw="object-contain w-full h-48 sm:h-56 md:h-64"
                src={require("../public/images/red_devils_image.png")}
              />
            </div>
          </MainPage>

          <MainPage colour1="#1a202c" colour2="#e2e8f0">
            <div tw="flex flex-col h-full m-auto overflow-auto sm:flex-row sm:flex-wrap sm:overflow-auto sm:justify-around sm:items-center">
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

          <MainPage colour1="#e2e8f0" colour2="#742a2a">
            <div tw="flex flex-row p-1 min-h-full scrolling-touch overflow-auto">
              <CardsVertical />
              <CardsVertical />
              <CardsVertical />
              <CardsVertical />
              <CardsVertical />
            </div>
          </MainPage>

          <MainPage colour1="#742a2a" colour2="#1a202c">
            <div tw="flex flex-col h-full m-auto overflow-auto sm:flex-row sm:flex-wrap sm:overflow-auto sm:justify-around sm:items-center">
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
              <div tw="h-24 m-2 sm:h-48 sm:m-2 sm:w-64 md:h-56 md:w-72 lg:h-64 lg:w-96 bg-gray-200 rounded shadow-lg">
                lmao
              </div>
              <div tw="h-24 m-2 sm:h-48 sm:m-2 sm:w-64 md:h-56 md:w-72 lg:h-64 lg:w-96 bg-gray-200 rounded shadow-lg">
                lmao
              </div>
            </div>
          </MainPage>
        </div>
      </div>
    </div>
  )
}

export default Index
