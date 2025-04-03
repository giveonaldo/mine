import React from 'react'

function PhotoCard({ image }) {
  return (
    <div className='md:w-48 md:h-48 rounded-3xl overflow-hidden cursor-pointer md:filter md:grayscale md:hover:filter-none transition duration-300 ease-out md:outline md:outline-[#FFF0BD] border-white md:border-none border-2 md:border-0'>
      <img className='md:w-48 md:h-48 w-auto h-auto
         object-cover' src={image} alt='me & nayla' />
    </div>
  )
}

export default PhotoCard