import Button from 'daisyui/components/button';
import React from 'react';

const Workflow = () => {
    return (
    <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-[120px]'>
            <div className='max-w-[1200px] mx-auto  '>
             <div className='text-center flex flex-col justify-center items-center'>
                    <h1 className='text-[48px] text-black font-extrabold'>Ready to Transform Your Workflow?</h1>
                    <p className='mb-6'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
                    <div className='flex gap-6 mb-4'>
                        <button className=' btn btn-primary bg-white text-purple-500 rounded-3xl'>Explore Products</button>
                        <button className='btn btn-outline text-white rounded-3xl'>View Pricing</button>
                    </div>
                    <p className='text-gray-300'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    </div>
    );
};

export default Workflow;