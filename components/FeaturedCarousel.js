// https://source.unsplash.com/1600x900/?africa

import React from 'react'
import Link from 'next/link'

const images = [
  {
    id: 1,
    image: 'https://source.unsplash.com/1600x900/?africa',
    title: 'Title 1',
    url: '/',
  },
  {
    id: 2,
    image: 'https://source.unsplash.com/1600x900/?africa',
    title: 'Title 2',
    url: '/',
  },
  {
    id: 3,
    image: 'https://source.unsplash.com/1600x900/?africa',
    title: 'Title 3',
    url: '/',
  },
]

const Divs = () => {
  return (
    <div className='flex justify-end'>
      {images.map((image) => (
        <Link key={image.id} href='/'>
          <div
            className='w-2/3 h-2/3 m-2 bg-cover bg-center rounded-lg shadow-lg'
            style={{ backgroundImage: `url(${image.image})` }}
          >
            <div className='bg-gray-800 bg-opacity-75 w-full h-full flex flex-col justify-center items-center rounded-lg'>
              <h2 className='text-white text-3xl font-bold mb-4'>
                {image.title}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Divs

// import React from 'react'

// const FeaturedCarousel = () => {
//   return (
//     <div className='flex justify-start h-2 w-full'>
//       <div className='bg-blue-500 h-2 w-2 rounded-full animate-move ml-auto'></div>

//       <div className='bg-green-500 h-2 w-2 rounded-full animate-move'></div>
//       <div className='bg-yellow-500 h-2 w-2 rounded-full animate-move'></div>
//     </div>
//   )
// }

// export default FeaturedCarousel
