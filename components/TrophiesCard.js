import tw from "twin.macro"
import { css } from "@emotion/core"

const TrophiesCard = props => {
  return (
    <div
      css={[
        tw`m-2 bg-gray-200 rounded shadow-lg h-24 sm:w-56 sm:h-40 md:w-64 md:h-48 lg:w-72 lg:h-56`
      ]}
      {...props}
    />
  )
}

export default TrophiesCard
