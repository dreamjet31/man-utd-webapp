import tw from "twin.macro"

const Navbar = () => {
  return (
    <div tw="flex flex-row my-auto sm:my-0 sm:flex-col sm:w-1/6 bg-gray-900">
      <div tw="self-center">
        <div tw="w-16 h-16 m-2 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32">
          <img src={require("../public/images/mufc_logo.jpg")} />
        </div>
      </div>
      <div tw="flex flex-row flex-wrap justify-center items-center text-lg mx-auto sm:flex-col sm:w-full sm:mt-24 text-yellow-500 sm:text-lg md:text-xl md:mt-32 lg:text-2xl lg:mt-48">
        <div tw="px-2 py-1"> Home </div>
        <div tw="px-2 py-1"> About </div>
        <div tw="px-2 py-1"> Trophies </div>
        <div tw="px-2 py-1"> Players </div>
      </div>
    </div>
  )
}

export default Navbar
