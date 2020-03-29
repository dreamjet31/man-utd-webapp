import tw from "twin.macro"

const PlayersCard = props => {
  const player1Img = props.player1Img
  const player2Img = props.player2Img
  const player1Name = props.player1Name
  const player2Name = props.player2Name

  return (
    <div tw="flex flex-col flex-shrink-0 h-full mx-2">
      <div tw="bg-gray-100 p-1 rounded m-auto h-48 w-full sm:h-56 md:h-64 lg:h-72">
        <div>
          <img
            tw="h-40 sm:h-48 md:h-56 lg:h-64 mx-auto rounded object-cover"
            src={require(`../public/images/players/${player1Img}.png`)}
          />
        </div>
        <div tw="text-center px-1 rounded border-gray-100 border-2 font-semibold bg-gray-900 text-gray-100">
          <p>{player1Name}</p>
        </div>
      </div>
      <div tw="bg-white p-1 rounded m-auto h-48 w-full sm:h-56 md:h-64 lg:h-72">
        <div>
          <img
            tw="h-40 sm:h-48 md:h-56 lg:h-64 mx-auto rounded object-cover"
            src={require(`../public/images/players/${player2Img}.png`)}
          />
        </div>
        <div tw="text-center px-1 rounded border-gray-100 border-2 font-semibold bg-gray-900 text-gray-100">
          <p>{player2Name}</p>
        </div>
      </div>
    </div>
  )
}

export default PlayersCard
