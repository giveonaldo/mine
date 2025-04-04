import React, { useState, useEffect, useRef } from 'react';
import PhotoCard from '../components/PhotoCard';
import StoriesCard from '../components/StoriesCard';
import { photoCard, storiesCard } from '../assets/data';
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand } from "react-icons/tb";

function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showFloatingNav, setShowFloatingNav] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const floatingNavRef = useRef(null);

    // Prevent scrolling when sidebar is open
    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden'; // For iOS Safari
            setShowFloatingNav(false); // Ensure floating nav is hidden
        } else {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        };
    }, [isSidebarOpen]);

    // Scroll handler for floating navbar
    useEffect(() => {
        const handleScroll = () => {
            if (isSidebarOpen) return; // Don't trigger during sidebar open

            const currentScrollY = window.scrollY;
            const scrollUp = currentScrollY < lastScrollY;
            const scrolledUpFast = (lastScrollY - currentScrollY) > 15;

            if (scrollUp && scrolledUpFast && currentScrollY > 100) {
                setShowFloatingNav(true);
            }
            else if (currentScrollY <= 100 || !scrollUp) {
                setShowFloatingNav(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, isSidebarOpen]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <section className='max-w-screen-xl mx-auto flex flex-col items-center pt-5 min-h-screen md:bg-white bg-[#FFF1D5] relative'>
            {/* Floating Navbar */}
            <div
                ref={floatingNavRef}
                className={`fixed md:hidden top-0 left-0 right-0 bg-[#FFF1D5] z-40 shadow-md transition-all duration-300 ease-out ${showFloatingNav && !isSidebarOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                <div className='max-w-screen-xl mx-auto flex flex-row items-center justify-between px-8 py-5'>
                    <h1 className='font-inspiration text-5xl text-[#210F37]'>Our Gallery</h1>
                    <button
                        onClick={toggleSidebar}
                        className='md:hidden w-8 h-8 text-[#A62C2C] focus:outline-none'
                        aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
                    >
                        <TbLayoutSidebarLeftCollapse className='w-full h-full' />
                    </button>
                </div>
            </div>

            {/* Original Navbar */}
            <div className={`w-full transition-opacity duration-200 ${showFloatingNav || isSidebarOpen ? 'opacity-0' : 'opacity-100'
                }`}>
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
            </div>

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 md:hidden ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={closeSidebar}
            />

            {/* Main Content */}
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

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-[#FFF1D5] z-30 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className='p-6 overflow-y-auto flex flex-col h-full'>
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
                                onClick={closeSidebar}
                            />
                        ))}
                    </div>
                    <p className='mt-auto font-thin text-xs'>My girlfriend instagram <a className='text-blue-700' href='https://www.instagram.com/naylanggr_?igsh=dDNhNXg5N2cxcDcx' target='_blank' rel="noreferrer">@naylanggr_</a></p>
                </div>
            </div>

            <h1 className='mt-auto mb-6 font-inter text-xl'>By <a href='https://portfolio-v2-lac-gamma.vercel.app/' target='_blank' rel="noreferrer">Giveonaldo</a></h1>
        </section>
    );
}

export default Home;
