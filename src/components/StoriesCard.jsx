import React from 'react'

function StoriesCard({image, desc, link}) {
  return (
    <a href={link} className='text-wrap flex w-full h-auto border gap-4 border-black items-center transition duration-300 ease-out p-4 md:hover:shadow-custome md:shadow-none shadow-custome '>
      <img className='w-14 h-14 object-cover flex-none ' src={image} alt='me and my girlfriend' />
      <p className='text-xs font-serif line-clamp-3'>{desc}</p>
    </a>
  )
}

export default StoriesCard