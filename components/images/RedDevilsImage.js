import tw from "twin.macro"

// w-16 h-16 m-2 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32
const RedDevilsImage = () => {
  return (
    <div tw="mx-auto mt-20 sm:mt-24 md:mt-32 lg:mt-48">
      <img
        tw="object-contain w-full h-48 sm:h-56 md:h-64"
        src="/images/red_devils_image.png"
      />
    </div>
  )
}

export default RedDevilsImage
