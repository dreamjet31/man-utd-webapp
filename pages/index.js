import React from "react"
import tw from "twin.macro"
import styled from "@emotion/styled/macro"
import { css } from "@emotion/core"
import Head from "next/head"

const Index = () => {
  return (
    <div tw="mx-auto">
      <Head>
        <title>Manchester United</title>
      </Head>

      <div tw="flex flex-col sm:flex-row">
        <div tw="flex-1 sm:flex-none sm:w-1/5 sm:min-h-screen bg-gray-900 text-gray-100 p-4">
          This is the Navbar
        </div>
        <div tw="flex-1 min-h-screen sm:w-4/5 bg-green-100 text-gray-900 p-4">
          <p tw="mb-3">
            LMAO What LMAO WhatLMAO What LMAO WhatLMAO What LMAO WhatLMAO What
            LMAO WhatLMAO What LMAO What
          </p>
        </div>
      </div>
    </div>
  )
}

export default Index
