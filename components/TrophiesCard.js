import tw from "twin.macro"
import { css } from "@emotion/core"

const TrophiesCard = props => {
  const {
    trophyImage1,
    trophyCount1,
    trophyName1,
    trophyImage2,
    trophyCount2,
    trophyName2
  } = props

  return (
    <div tw="flex flex-col flex-shrink-0 h-full mx-2">
      <div tw="bg-white p-1 rounded m-auto h-48 w-full sm:h-56 md:h-64 lg:h-72">
        <div>
          <img
            tw="h-40 sm:h-48 md:h-56 lg:h-64 rounded object-cover"
            src={require(`../public/images/trophies/${trophyImage1}.jpg`)}
          />
        </div>
        <div tw="text-center rounded border-gray-100 border-2">
          <p>
            <span tw="text-lg px-1 font-bold">{trophyCount1}</span>
            <span tw="font-semibold text-lg px-1 rounded bg-gray-900 text-gray-100">
              {trophyName1}
            </span>
          </p>
        </div>
      </div>
      <div tw="bg-white p-1 rounded m-auto h-48 w-full sm:h-56 md:h-64 lg:h-72">
        <div>
          <img
            tw="h-40 sm:h-48 md:h-56 lg:h-64 rounded object-cover"
            src={require(`../public/images/trophies/${trophyImage2}.jpg`)}
          />
        </div>
        <div tw="text-center rounded border-gray-100 border-2">
          <p>
            <span tw="text-lg px-1 font-bold">{trophyCount2}</span>
            <span tw="font-semibold text-lg px-1 rounded bg-gray-900 text-gray-100">
              {trophyName2}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default TrophiesCard
