import React from 'react';
import bannerImg from '../assets/banner.png'
const Banner = () => {
    return (
        <div className='flex flex-col sm:flex-row container mx-auto gap-15 items-center'>
            <section className='left '>

                <p className=''>New: AI-Powered Tools Available</p>
                <h1 className='text-4xl font-bold'>Supercharge Your Digital Workflow</h1>
                <p>Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.

                    Explore Products
                </p>

                <div>
                    <button className='primary-btn'>Explore Products</button>
                    <button>Watch Demo</button>

                </div>
            </section>


            <section className='right'>
                <img src={bannerImg} alt="" className='w-full h-auto' />


            </section>

        </div>
    );
};

export default Banner;