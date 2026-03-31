import React from 'react';

const Steps = () => {
    return (
        <div className='max-w-[1200px] mx-auto mb-[120px]'>
            <div className='text-center'>
                    <h1 className='text-[48px] text-black font-extrabold'>Get Started in 3 Steps</h1>
                    <p className='mb-6'>Start using premium digital tools in minutes, not hours.</p>
            </div>
          
      <div className='flex justify-between gap-6'>
              <div className="card w-96 bg-base-100 shadow-sm  p-4">
                <div className='flex justify-end p-5'><div className=' text-white w-10 h-10 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] flex items-center justify-center'>01</div></div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='relative mb-4'>
                    <div className='w-40 h-40 bg-purple-500/20 rounded-full flex justify-center items-center'>
                        
                    </div>
                    <img  src='/public/images/user.png' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'></img>
                </div>
                <h1 className='text-[#101727] text-2xl font-bold mb-3'>Create Account</h1>
                <p className='text-[#627382] text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
            </div>
              <div className="card w-96 bg-base-100 shadow-sm  p-4">
                <div className='flex justify-end p-5'><div className=' text-white w-10 h-10 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] flex items-center justify-center'>02</div></div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='relative mb-4'>
                    <div className='w-40 h-40 bg-purple-500/20 rounded-full flex justify-center items-center'>
                        
                    </div>
                    <img  src='/public/images/package.png' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'></img>
                </div>
                <h1 className='text-[#101727] text-2xl font-bold mb-3'>Choose Products</h1>
                <p className='text-[#627382] text-center'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
            </div>
              <div className="card w-96 bg-base-100 shadow-sm  p-4">
                <div className='flex justify-end p-5'><div className=' text-white w-10 h-10 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] flex items-center justify-center'>03</div></div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='relative mb-4'>
                    <div className='w-40 h-40 bg-purple-500/20 rounded-full flex justify-center items-center'>
                        
                    </div>
                    <img  src='/public/images/rocket.png' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'></img>
                </div>
                <h1 className='text-[#101727] text-2xl font-bold mb-3'>Start Creating</h1>
                <p className='text-[#627382] text-center'>Download and start using your premium tools immediately.</p>
                </div>
            </div>

      </div>
                
        
          
            
            
        </div>
    );
};

export default Steps;