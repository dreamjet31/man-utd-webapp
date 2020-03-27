import tw from "twin.macro"
import { css } from "@emotion/core"

const MainPage = props => {
  const colour1 = props.colour1
  const colour2 = props.colour2

  return (
    <div
      css={[
        tw`bg-gray-500 p-1 h-screen`,
        css`
          background: linear-gradient(${colour1}, ${colour2});
        `
      ]}
      {...props}
    />
  )
}

export default MainPage
