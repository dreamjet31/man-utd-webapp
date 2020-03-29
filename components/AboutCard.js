import tw from "twin.macro"

const AboutCard = props => {
  const title = props.title
  const subtitle = props.subtitle

  return (
    <div tw="flex flex-row-reverse overflow-auto items-center justify-between h-32 m-2 p-1 sm:flex-col sm:items-center sm:justify-center sm:h-48 sm:m-2 sm:w-64 md:h-56 md:w-72 lg:h-64 lg:w-96 bg-gray-200 rounded shadow-lg">
      <div tw="w-2/3 text-center m-1 p-1">
        <p>
          <span tw="font-bold text-gray-200 bg-gray-900 p-2 text-3xl sm:p-4 sm:text-4xl md:text-5xl">
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

export default AboutCard
