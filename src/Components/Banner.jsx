import React from 'react';
import bannerImg from '../assets/banner.png'
const Banner = () => {
    return (
        <>
            <div className='flex flex-col sm:flex-row container mb-12 justify-between mx-auto gap-0 sm:gap-20 items-center'>
                <section className='left flex-1 p-4 sm:p-20'>

                    <p className=' bg-purple-400 rounded-full inline-block text-[18px] px-6 mb-4'>New: AI-Powered Tools Available</p>
                    <h1 className='text-4xl sm:text-7xl font-bold mb-4'>Supercharge Your Digital Workflow</h1>
                    <p className='text-[18px] mb-6'>Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.

                        Explore Products
                    </p>

                    <div className='flex gap-4'>
                        <button className='primary-btn'>Explore Products</button>
                        <button className='primary-text border border-purple-900 rounded-full font-bold px-6'>Watch Demo</button>

                    </div>
                </section>


                <section className='right flex-1 '>
                    <img src={bannerImg} alt="" className='mt-8 w-full' />


                </section>
            </div>


            <div className=" primary-btn rounded-none py-16 px-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-12 lg:space-x-24">

                    <div className="flex flex-col items-center">
                        <div className="text-5xl font-bold text-white tracking-wide mb-2">50K+</div>
                        <div className="text-white/80 text-sm font-medium tracking-wide">Active Users</div>
                    </div>

                    <div className="hidden md:block w-px h-16 bg-white/20"></div>

                    <div className="flex flex-col items-center">
                        <div className="text-5xl font-bold text-white tracking-wide mb-2">200+</div>
                        <div className="text-white/80 text-sm font-medium tracking-wide">Premium Tools</div>
                    </div>

                    <div className="hidden md:block w-px h-16 bg-white/20"></div>

                    <div className="flex flex-col items-center">
                        <div className="text-5xl font-bold text-white tracking-wide mb-2">4.9</div>
                        <div className="text-white/80 text-sm font-medium tracking-wide">Rating</div>
                    </div>

                </div>
            </div>

        </>


    );
};

export default Banner;