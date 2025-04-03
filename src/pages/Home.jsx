import React, { useEffect, useState } from 'react'
import PhotoCard from '../components/PhotoCard'
import StoriesCard from '../components/StoriesCard'
import { photoCard, storiesCard } from '../assets/data'
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand } from "react-icons/tb";

function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isSidebarOpen]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <section className='max-w-screen-xl mx-auto flex flex-col items-center pt-5 min-h-screen md:bg-white bg-[#FFF1D5] relative'>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 md:hidden ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={closeSidebar}
            />
            <div className='flex flex-row items-center justify-between w-full md:w-fit px-8 md:px-0'>
                <h1 className='font-inspiration text-5xl md:text-7xl md:mb-16 text-[#210F37]'>Our Gallery</h1>
                <button
                    onClick={toggleSidebar}
                    className='md:hidden w-8 h-8 text-[#A62C2C] focus:outline-none'
                    aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
                >
                    <TbLayoutSidebarLeftCollapse className='w-full h-full' />
                </button>
            </div>
            <div className='flex md:flex-row flex-col w-full px-12 mb-10 mt-10 md:mt-0'>
                <div className='md:grid md:grid-cols-3 flex flex-col items-center gap-10 w-full md:w-auto md:gap-12 md:border-gray-600 md:border-r-2 md:pr-12 flex-[1.8_1.8_0%]'>
                    {photoCard.map((photo) => (
                        <PhotoCard key={photo.id} image={photo.image} />
                    ))}
                </div>
                <div className='hidden md:flex flex-col items-center flex-1'>
                    <h1 className='font-inria text-4xl mb-4'>Our Stories</h1>
                    <div className='w-full pl-9 flex flex-col gap-6'>
                        {storiesCard.map((stories) => (
                            <StoriesCard key={stories.id} desc={stories.desc} image={stories.image} link={stories.link} />
                        ))}
                    </div>
                </div>
            </div>
            <div
                className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-[#FFF1D5] z-30 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className='p-6 overflow-y-auto h-full'>
                    <div className='flex items-center justify-between mb-6'>
                        
                        <button
                            onClick={toggleSidebar}
                            className='md:hidden w-8 h-8 text-[#A62C2C] focus:outline-none'
                            aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
                        >
                            <TbLayoutSidebarLeftExpand className='w-full h-full' />
                        </button>
                        <h1 className='font-inria text-3xl text-[#210F37]'>Our Stories</h1>
                    </div>
                    <div className='flex flex-col gap-6'>
                        {storiesCard.map((stories) => (
                            <StoriesCard
                                key={stories.id}
                                desc={stories.desc}
                                image={stories.image}
                                link={stories.link}
                                onClick={closeSidebar} // Close sidebar when a story is clicked
                            />
                        ))}
                    </div>
                </div>
            </div>
            <h1 className='mt-auto mb-6 font-inter text-xl'>Inspired by Atama Cahya</h1>
        </section>
    )
}

export default Home