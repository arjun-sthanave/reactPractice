import React, { use, useState } from 'react'
import '../App'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
 
  return (
    <div className='w-full h-screen gradients-background flex flex-col pr-[64px] pl-[64px] pb-[80px] gap-10 justify-center border-black'>
      
         
      <div className="flex flex-col gap-[32px] items-center ">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-[10px] font-erode font-semibold  lg:text-5xl text-3xl text-[#0d0d0d] items-center">
             <h1 className='text-center'>Login </h1>
           
          </div>
          <div className="flex flex-col gap-[10px] items-center text-[#737571] font-medium text-[16px]">
            
          </div>
          </div>
      </div>

      <div className="flex flex-col items-center gap-[16px] w-full">
            
            <div className="flex flex-col items-center gap-[32px] w-full">
               
              <div className=" flex flex-col gap-[16px] w-full items-center">
                  <div className="gap-1">
                        <h1 className='gap-1 font-medium text-sm lg:text-md '>Email Address <span className='text-[#EF4444] font-medium text-[16px]'>*</span></h1>
                 <input type="text"  placeholder='john123@gmail.com' className="w-full lg:w-[566px] gap-2 rounded-[6px] border border-[#E3E3E2] py-2 px-3 bg-transparent" />
              
                  </div>
                  <div className="gap-1">
                        <h1 className='gap-1 font-medium text-sm lg:text-md '>Password <span className='text-[#EF4444] font-medium text-[16px]'>*</span></h1>
                 <input type="password"  placeholder='************' className="w-full lg:w-[566px] gap-2 rounded-[6px] border border-[#E3E3E2] py-2 px-3 bg-transparent"  />
              
                  </div>
                 
              </div>
               
               <div className="gap-[10px] w-full flex justify-center items-center">
                <button className='rounded-[8px] border py-3 px-4 gap-2  bg-[#2C2C2C] w-[566px]  font-semibold text-[16px] text-white'>Confirm</button>
               </div>
            </div>
            <div className="flex gap-1">
              <h1 className='font-normal text-4 text-[#0d0d0d]'>Already have an account?</h1>
 <div onClick={()=>{
                Navigate('/signup')
              }} href="" className=" font-medium  text-[16px] text-[#B753A4]">SignUp</div>
            
            </div>

      </div>
    </div>
  )
}

export default Login