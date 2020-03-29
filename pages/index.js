import React from "react"
import tw from "twin.macro"
import styled from "@emotion/styled/macro"
import { css } from "@emotion/core"
import Head from "next/head"
import fetch from "isomorphic-unfetch"

import Navbar from "../components/Navbar"
import NewsCard from "../components/NewsCard"
import MainPage from "../components/MainPage"
import AboutCard from "../components/AboutCard"
import PlayersCard from "../components/PlayersCard"
import TrophiesCard from "../components/TrophiesCard"

const Index = props => {
  const ArticlesWithAuthors = props.articles.filter(
    article => article.author != null
  )

  return (
    <div
      css={[
        tw`mx-auto`,
        css`
          scroll-behavior: smooth;
          * {
            scroll-behavior: smooth;
          }
        `
      ]}
    >
      <Head>
        <title>Manchester United</title>
      </Head>

      {/* HOME */}
      <div tw="flex flex-1 flex-col sm:flex-row-reverse h-screen">
        {/* <Navbar /> */}
        <div tw="overflow-auto h-screen w-full">
          <MainPage colour1="#742a2a" colour2="#1a202c">
            <div tw="flex flex-col overflow-auto justify-around items-center content-around">
              <div
                id="home"
                tw="p-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-gray-100 font-bold"
              >
                MANCHESTER UNITED
              </div>
              <div tw="mx-auto mt-10 mx-10 p-4 shadow-lg rounded sm:mt-20 md:mt-24 lg:mt-32">
                <img
                  tw="object-contain w-full h-48 sm:h-56 md:h-64"
                  src={require("../public/images/red_devils_image.png")}
                />
              </div>
            </div>
          </MainPage>

          {/* ABOUT  */}
          <MainPage id="about" colour1="#1a202c" colour2="#2a4365">
            <div tw="flex flex-1 flex-col h-full m-2 p-1 overflow-auto sm:flex-row sm:flex-wrap sm:overflow-auto sm:justify-around sm:items-center">
              <AboutCard title="$3.8B" subtitle="Net Worth (May 2019)" />
              <AboutCard title="1878" subtitle="Est." />
              <AboutCard title="Newton Heath" subtitle="Founding Name" />
              <AboutCard title="Old Trafford" subtitle="Home Stadium" />
            </div>
          </MainPage>

          {/* TROPHIES */}
          <MainPage id="trophies" colour1="#2a4365" colour2="#742a2a">
            <div tw="flex flex-wrap m-2 overflow-auto h-full">
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
          <MainPage id="players" colour1="#742a2a" colour2="#1a202c">
            <div tw="flex flex-1 h-full m-auto p-2 overflow-auto">
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

          {/* NEWS */}
          <MainPage id="news" colour1="#1a202c" colour2="#2a4365">
            <div tw="flex flex-wrap mt-2 mx-2 overflow-auto">
              {ArticlesWithAuthors.map(article => (
                <NewsCard
                  urlToImage={article.urlToImage}
                  author={article.author}
                  title={article.title}
                  description={article.description}
                  url={article.url}
                  publishedAt={article.publishedAt}
                ></NewsCard>
              ))}
            </div>
          </MainPage>
        </div>
        <Navbar />
      </div>
    </div>
  )
}

Index.getInitialProps = async function() {
  const res = await fetch(
    "http://newsapi.org/v2/everything?" +
      "q=Manchester United&" +
      "from=2020-03-29&" +
      "sortBy=popularity&" +
      "apiKey=d690a03ad7524a55a42c9c404e2afb46"
  )
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)
  console.log(res)

  return data
}

export default Index
