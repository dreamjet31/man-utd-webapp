import tw from "twin.macro"
import { css } from "@emotion/core"

const TrophiesCard = props => {
  const trophyImage = props.trophyImage
  const trophyCount = props.trophyCount
  const trophyName = props.trophyName

  return (
    <div tw="w-full md:w-1/2 lg:w-1/3 px-2 my-2">
      <div tw="bg-white">
        <div tw="rounded p-1">
          <img
            tw="rounded"
            src={require(`../public/images/trophies/${trophyImage}.jpg`)}
          />
        </div>
        <div tw="text-center p-1">
          <p tw="text-lg">
            {trophyName} - <span tw="font-bold text-lg">{trophyCount}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default TrophiesCard
