import React, { useState } from 'react';

function PhotoCard({ image, description = "Our beautiful moment together" }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={`relative md:w-48 md:h-48 w-72 h-96 rounded-3xl cursor-pointer perspective-1000`}
      onClick={handleFlip}
    >
      {/* Front Side (Image) */}
      <div className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
        isFlipped ? 'opacity-0 rotate-y-180' : 'opacity-100 rotate-y-0'
      } backface-hidden`}>
        <div className='w-full h-full transition duration-300 ease-out outline outline-[#FFF0BD] rounded-3xl overflow-hidden'>
          <img 
            className='w-full h-full object-cover' 
            src={image} 
            alt='me & nayla' 
          />
        </div>
      </div>

      {/* Back Side (Description) */}
      <div className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
        isFlipped ? 'opacity-100 rotate-y-0' : 'opacity-0 rotate-y-180'
      } backface-hidden bg-white p-4 rounded-3xl border-2 border-gray-700 overflow-hidden`}>
        <div className='flex flex-col justify-center items-center h-full'>
          <p className='text-[#210F37] font-inria text-center'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;