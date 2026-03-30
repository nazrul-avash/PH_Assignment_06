import React from 'react';

const Testimonials = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] pt-[50px] pb-[50px] mb-[120px]'>
            <div className='max-w-[1200px] mx-auto flex items-center justify-center gap-10'>
                <div className='flex gap-25 items-center'>
                    <div><h1 className='text-[60px] text-white font-extrabold'>50K+</h1>
                    <h2 className='text-white/50  text-2xl'>Active Users</h2></div>
                    <div className="w-px h-15 pt-3 bg-gray-300"></div>
                </div>
                <div className='flex pl-10 gap-25 items-center'>
                    <div><h1 className='text-[60px] text-white font-extrabold'>200+</h1>
                    <h2 className='text-white/50  text-2xl'>Premium Tools</h2></div>
                    <div className="w-px h-15 bg-gray-300"></div>
                </div>
                <div className='pl-10'>
                    <div><h1 className='text-[60px] text-white font-extrabold'>4.9</h1>
                    <h2 className='text-white/50  text-2xl'>Rating</h2></div>
                    
                </div>
            </div>
        </div>
    );
};

export default Testimonials;