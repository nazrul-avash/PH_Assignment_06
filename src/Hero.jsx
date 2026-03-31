import React from 'react';
import heroBanner from './assets/banner.png'
import { CiPlay1 } from 'react-icons/ci';

const Hero = () => {
    return (
        <div className='max-w-[1200px] mx-auto mt-[85px] flex md:flex-row  flex-col justify-between mb-[85px] p-3 gap-3'>
            <div>
                <button className='btn rounded-4xl p-2 bg-blue-300/30 text-purple-500'>
                    <div className='w-3 h-3 rounded-full bg-purple-500/30  flex  items-center pl-0.5'><div className=' w-2 h-2 rounded-full bg-purple-500 '></div></div>
                    New: AI-Powered Tools Available</button>
                <h1 className='md:text-[72px] text-4xl font-extrabold'>Supercharge Your <br></br> Digital Workflow</h1>
                <p className='mb-4'>Access premium AI tools, design assets, templates, and productivity<br></br>
                    software—all in one place. Start creating faster today.
                </p>
                <div className='flex gap-5'>
                    <button className='btn btn-primary bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl'>Explore Products</button>
                <button className='btn btn-outline rounded-3xl'><CiPlay1 />Watch Demo</button>
                </div>
            </div>
            <div>
                <img src={heroBanner}></img>
            </div>
            
        </div>
    );
};

export default Hero;