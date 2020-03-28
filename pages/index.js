import React from "react"
import tw from "twin.macro"
import styled from "@emotion/styled/macro"
import { css } from "@emotion/core"
import Head from "next/head"

import Navbar from "../components/Navbar"
import MainPage from "../components/MainPage"
import PlayersCard from "../components/PlayersCard"
import TrophiesCard from "../components/TrophiesCard"

const AboutCard = props => {
  const title = props.title
  const subtitle = props.subtitle

  return (
    <div tw="flex flex-row-reverse items-center justify-between h-24 m-2 p-1 sm:flex-col sm:items-center sm:justify-center sm:h-48 sm:m-2 sm:w-64 md:h-56 md:w-72 lg:h-64 lg:w-96 bg-gray-200 rounded shadow-lg">
      <div tw="w-2/3 text-center m-1 p-1">
        <p>
          <span tw="font-bold text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </span>
        </p>
      </div>
      <div tw="w-1/3 m-1 text-center self-center">
        <h3 tw="text-base font-semibold text-gray-700">{subtitle}</h3>
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

      {/* HOME */}
      <div tw="flex flex-1 flex-col sm:flex-row h-screen">
        <Navbar> Sidebar </Navbar>
        <div tw="overflow-auto h-screen w-full">
          <MainPage colour1="#742a2a" colour2="#1a202c">
            <div tw="p-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-gray-100 font-bold">
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
            <div tw="flex flex-1 flex-col h-full m-2 p-1 overflow-auto sm:flex-row sm:flex-wrap sm:overflow-auto sm:justify-around sm:items-center">
              <AboutCard title="$3.8B" subtitle="Net Worth (May 2019)" />
              <AboutCard title="1878" subtitle="Est." />
              <AboutCard title="Newton Heath FC" subtitle="Founding Name" />
              <AboutCard title="Old Trafford" subtitle="Home Stadium" />
            </div>
          </MainPage>

          {/* TROPHIES */}
          <MainPage colour1="#e2e8f0" colour2="#742a2a">
            <div tw="flex flex-1 flex-col h-screen m-2 p-1 overflow-auto sm:flex-row sm:flex-wrap sm:overflow-auto sm:justify-around sm:items-center">
              <TrophiesCard
                trophyImage="premier_league"
                trophyCount="20"
                trophyName="Premier League"
              />
              <TrophiesCard
                trophyImage="fa_cup"
                trophyCount="12"
                trophyName="FA Cup"
              />
              <TrophiesCard
                trophyImage="uefa_champions_league"
                trophyCount="3"
                trophyName="Champion's League"
              />
              <TrophiesCard
                trophyImage="uefa_europa_league"
                trophyCount="1"
                trophyName="Europa League"
              />
              <TrophiesCard
                trophyImage="fifa_club_world_cup"
                trophyCount="1"
                trophyName="FIFA Club World Cup"
              />
              <TrophiesCard
                trophyImage="community_shield"
                trophyCount="21"
                trophyName="Community Shield"
              />
            </div>
          </MainPage>

          {/* PLAYERS */}
          <MainPage colour1="#742a2a" colour2="#1a202c">
            <div tw="flex flex-1 m-2 p-1 flex-row min-h-full overflow-auto">
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
