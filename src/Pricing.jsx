import React from 'react';

const Pricing = () => {
    return (
        <div className='max-w-[1200px] mx-auto mb-[120px]'>
             <div className='text-center'>
                    <h1 className='text-[48px] text-black font-extrabold'>Simple, Transparent Pricing</h1>
                    <p className='mb-6'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='flex justify-between gap-10 md:flex-row flex-col items-center'>
                <div className="card w-92 bg-base-100 shadow-sm rounded-4xl ">
  <div className="card-body bg-[#F9FAFC] pb-5 rounded-4xl">
   
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">Starter</h2>
      
    </div>
    <p className='text-[#627382]'>Access to 10 free tools</p>
    <span className="pt-3 text-2xl font-bold">$0/mo</span>
    <ul className="mt-6 flex flex-col gap-2 text-xs pb-8">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Basic templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Community support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>1 project per month</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>AI-driven image enhancements</span>
      </li>
      
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block rounded-3xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">Get Started Free</button>
    </div>
  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-sm relative rounded-4xl">
                    <div className='flex justify-center absolute items-center left-30 -top-3'>
                        <button className='bg-[#FEF3C6] rounded-4xl p-1 px-2 text-red-400'>Most Popular</button>
                    </div>
  <div className="card-body text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] pb-5 rounded-4xl">
   
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">Pro</h2>
      
    </div>
    <p className='text-gray-400'>Best for professionals</p>
    <span className="pt-3 text-2xl font-bold">$29/mo</span>
    <ul className="mt-6 flex flex-col gap-2 text-xs pb-8">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to all premium tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Priority support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited projects</span>
      </li>
      
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block rounded-3xl bg-white text-black">Get Started Free</button>
    </div>
  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-sm rounded-4xl ">
  <div className="card-body bg-[#F9FAFC] pb-5 rounded-4xl">
   
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">Enterprise</h2>
      
    </div>
    <p className='text-[#627382]'>For teams and businesses</p>
    <span className="pt-3 text-2xl font-bold">$99/mo</span>
    <ul className="mt-6 flex flex-col gap-2 text-xs pb-8">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Everything in Pro</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Team collaboration</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom integrations</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Dedicated support</span>
      </li>
      
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block rounded-3xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">Get Started Free</button>
    </div>
  </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;