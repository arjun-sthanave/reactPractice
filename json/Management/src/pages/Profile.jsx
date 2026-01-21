import React, { useEffect, useState } from 'react'
import cartdata from '../data/cart.json'
import { X } from 'lucide-react';
import { getUserByid } from '../services/userService';
import { use } from 'react';
const Profile = () => {
   const [curUser, setcurUser] = useState()
  
  console.log("cartdata",cartdata);
  const token = JSON.parse(localStorage.getItem('token'))
  console.log("token",token);
  useEffect(() => {
  const loadUser = async () => {
    const user = await getUserByid(token);   
    setcurUser(user)                  
  };

  loadUser();
}, []);
  console.log(curUser);
  
  
  return (
    <div className='w-full flex flex-col items-center gap-5 py-5 px-8'>
    <div className="w-full flex flex-col gap-7">
       <div className="w-full flex justify-between items-center border-b border-[#e0dfdf] py-3">
      <div className="flex gap-3 items-center">
        <img src={curUser?.image} className="w-16 h-16 rounded-full"/>
        <div className="flex flex-col  items-start">
          <h1>{curUser?.username}</h1>
          <h1 className='text-[#ADA7A7]'>{curUser?.email}</h1>
        </div>
      </div>
      
        <X />
     </div>
     <div className="w-full flex flex-col gap-6 py-3 ">
      <div className="w-full flex justify-between items-center  py-3 border-b border-[#e0dfdf]">
        <div className="">Name</div>
        <div className="">{curUser?.firstName + " " + curUser?.lastName}</div>
      </div>
      <div className="w-full flex justify-between items-center  py-3 border-b border-[#e0dfdf]">
        <div className="">Email Account</div>
        <div className="">{curUser?.email}</div>
      </div>
      <div className="w-full flex justify-between items-center py-3 border-b border-[#e0dfdf]">
        <div className="">Mobile Number</div>
        <div className="">{curUser?.phone}</div>
      </div>
      <div className="w-full flex justify-between items-center py-3 border-b border-[#e0dfdf]">
        <div className="">Location</div>
        <div className="">{curUser?.address?.country}</div>
      </div>
     
     </div>
    </div>
    </div>
  )
}

export default Profile