import React from 'react'
import '../App'
import Nav from '../components/Nav'
const Signup = () => {
  return (
    <div className='w-full h-screen gradients-background flex flex-col pr-[64px] pl-[64px] pb-[80px] gap-10 '>
        <Nav/>
         
      <div className="flex flex-col gap-[32px] items-center">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-[10px] font-erode font-semibold  text-[48px] text-[#0d0d0d] items-center">
             <h1 className='text-center'>Signup to see and create <br /> reviews</h1>
           
          </div>
          <div className="flex flex-col gap-[10px] items-center text-[#737571] font-medium text-[16px]">
            <h1 className='text-center'>Lorem ipsum dolor sit amet consectetur. Eu elit <br />viverra elit nunc tortor bibendum nulla felis morbi. </h1>
            
          </div>
          </div>
      </div>

      <div className="flex flex-col items-center gap-[16px]">
            
            <div className="flex flex-col items-center gap-[32px]">
               
              <div className=" flex flex-col gap-[16px]">
                  <div className="gap-1">
                        <h1 className='gap-1 font-medium text-[16px]'>Email Address <span className='text-[#EF4444] font-medium text-[16px]'>*</span></h1>
                 <input type="text"  placeholder='john123@gmail.com' className="w-[566px] gap-2 rounded-[6px] border border-[#E3E3E2] py-2 px-3 bg-transparent" />
              
                  </div>
                  <div className="gap-1">
                        <h1 className='gap-1 font-medium text-[16px]'>Password <span className='text-[#EF4444] font-medium text-[16px]'>*</span></h1>
                 <input type="password"  placeholder='************' className="w-[566px] gap-2 rounded-[6px] border border-[#E3E3E2] py-2 px-3 bg-transparent"  />
              
                  </div>
                  <div className="gap-1">
                        <h1 className='gap-1 font-medium text-[16px]'>Confirm Password <span className='text-[#EF4444] font-medium text-[16px]'>*</span></h1>
                 <input type="password"  placeholder='************' className="w-[566px] gap-2 rounded-[6px] border border-[#E3E3E2] py-2 px-3 bg-transparent"  />
              
                  </div>
                  <div className="gap-1">
                        <h1 className='gap-1 font-medium text-[16px]'>Username (Optional) <span className='text-[#EF4444] font-medium text-[16px]'>*</span></h1>
                 <input type="text"  placeholder='john123@gmail.com' className="w-[566px] gap-2 rounded-[6px] border border-[#E3E3E2] py-2 px-3 bg-transparent " />
              
                  </div>
              </div>
               
               <div className="gap-[10px]">
                <button className='rounded-[8px] border py-3 px-4 gap-2  bg-[#2C2C2C] w-[566px]  font-semibold text-[16px] text-white'>Confirm</button>
               </div>
            </div>
            <div className="flex gap-1">
              <h1 className='font-normal text-4 text-[#0d0d0d]'>Already have an account?</h1>
              <a href="" className=" font-medium  text-[16px] text-[#B753A4]">Login</a>
            </div>

      </div>
    </div>
  )
}

export default Signup
