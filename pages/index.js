import React from "react"
import tw from "twin.macro"
import styled from "@emotion/styled/macro"
import { css } from "@emotion/core"
import Head from "next/head"

import Navbar from "../components/Navbar"
import MainPage from "../components/MainPage"
import PlayersCard from "../components/PlayersCard"
import TrophiesCard from "../components/TrophiesCard"

const Index = () => {
  return (
    <div tw="mx-auto">
      <Head>
        <title>Manchester United</title>
      </Head>

      {/* HOME */}
      <div tw="flex flex-1 flex-col sm:flex-row h-screen">
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

          {/* ABOUT  */}
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

          {/* TROPHIES */}
          <MainPage colour1="#e2e8f0" colour2="#742a2a">
            <div tw="flex flex-col h-full m-auto overflow-auto sm:flex-row sm:flex-wrap sm:overflow-auto sm:justify-around sm:items-center">
              <TrophiesCard>
                <img
                  tw="object-contain p-1 h-24 sm:object-top sm:w-56 sm:h-40 md:w-64 md:h-48 lg:w-72 lg:h-56"
                  src={require("../public/images/trophies/premier_league.jpg")}
                />
              </TrophiesCard>
              <TrophiesCard>
                <img
                  tw="object-contain p-1 h-24 sm:object-top sm:w-56 sm:h-40 md:w-64 md:h-48 lg:w-72 lg:h-56"
                  src={require("../public/images/trophies/fa_cup.jpg")}
                />
              </TrophiesCard>
              <TrophiesCard>
                <img
                  tw="object-contain p-1 h-24 sm:object-top sm:w-56 sm:h-40 md:w-64 md:h-48 lg:w-72 lg:h-56"
                  src={require("../public/images/trophies/uefa_champions_league.jpg")}
                />
              </TrophiesCard>
              <TrophiesCard>
                <img
                  tw="object-contain p-1 h-24 sm:object-top sm:w-56 sm:h-40 md:w-64 md:h-48 lg:w-72 lg:h-56"
                  src={require("../public/images/trophies/uefa_europa_league.jpg")}
                />
              </TrophiesCard>
              <TrophiesCard>
                <img
                  tw="object-contain p-1 h-24 sm:object-top sm:w-56 sm:h-40 md:w-64 md:h-48 lg:w-72 lg:h-56"
                  src={require("../public/images/trophies/fifa_club_world_cup.jpg")}
                />
              </TrophiesCard>
              <TrophiesCard>
                <img
                  tw="object-contain p-1 h-24 sm:object-top sm:w-56 sm:h-40 md:w-64 md:h-48 lg:w-72 lg:h-56"
                  src={require("../public/images/trophies/community_shield.jpg")}
                />
              </TrophiesCard>
            </div>
          </MainPage>

          {/* PLAYERS */}
          <MainPage colour1="#742a2a" colour2="#1a202c">
            <div tw="flex flex-1 flex-row min-h-full overflow-auto">
              <PlayersCard
                player1Img="de_gea"
                player2Img="fernandes"
                player1Name="David De Gea"
                player2Name="Bruno Fernandes"
              />
              <PlayersCard
                player1Img="rashford"
                player2Img="mctominay"
                player1Name="Marcus Rashford"
                player2Name="Scott McTominay"
              />
              <PlayersCard
                player1Img="bissaka"
                player2Img="pogba"
                player1Name="Aaron Bissaka"
                player2Name="Paul Pogba"
              />
              <PlayersCard
                player1Img="maguire"
                player2Img="shaw"
                player1Name="Harry Maguire"
                player2Name="Luke Shaw"
              />
              <PlayersCard
                player1Img="fred"
                player2Img="lindelof"
                player1Name="Fred"
                player2Name="Victor Lindelof"
              />
            </div>
          </MainPage>
        </div>
      </div>
    </div>
  )
}

export default Index
