import tw from "twin.macro"

const NewsCard = props => {
  const { urlToImage, author, title, description, url, publishedAt } = props

  return (
    <div tw="w-full md:w-1/2 lg:w-1/3 px-2 my-2">
      <div tw="shadow-md rounded bg-white">
        <img
          tw="h-48 w-full rounded object-cover"
          src={urlToImage}
          alt={title}
        />
        <div tw="flex flex-col p-4">
          <p tw="text-lg">{title}</p>
          <p tw="text-gray-600">
            By {author} on {publishedAt}
          </p>
          <p tw="text-gray-800">{description}</p>
          <a href={url}>
            <button tw="self-end bg-color-blue-500 p-2 rounded mt-4">
              Read More
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
