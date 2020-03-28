import tw from "twin.macro"

const CardsVertical = props => {
  const player1Img = props.player1Img
  const player2Img = props.player2Img
  const player1Name = props.player1Name
  const player2Name = props.player2Name

  return (
    <div tw="flex flex-1 flex-col justify-between">
      <div tw="flex-1 m-1 p-1 h-48 w-32 sm:h-56 sm:w-40 md:h-64 md:w-48 lg:h-72 lg:w-56 rounded bg-gray-200">
        <div tw="bg-gray-200 h-24 sm:h-32 md:h-40 lg:h-48 ">
          <img
            tw="object-contain object-top w-full overflow-hidden h-40 sm:h-48 md:h-56 lg:h-64"
            src={require(`../public/images/players/${player1Img}.png`)}
          />
          <p tw="text-sm text-center"> {player1Name} </p>
        </div>
      </div>
      <div tw="flex-1 m-1 p-1 h-48 w-32 sm:h-56 sm:w-40 md:h-64 md:w-48 lg:h-72 lg:w-56 rounded bg-gray-200">
        <div tw="bg-gray-200 h-24 sm:h-32 md:h-40 lg:h-48 ">
          <img
            tw="object-contain object-top w-full overflow-hidden h-48 sm:h-48 md:h-56 lg:h-64"
            src={require(`../public/images/players/${player2Img}.png`)}
          />
          <p tw="text-sm text-center"> {player2Name} </p>
        </div>
      </div>
    </div>
  )
}

export default CardsVertical
