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
          <p>
            <span tw="font-bold text-xl px-1">{trophyCount}</span>
            <span tw="text-base p-1 rounded font-semibold text-center bg-gray-900 text-gray-100">
              {trophyName}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default TrophiesCard
