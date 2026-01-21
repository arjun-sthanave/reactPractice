import React, { useEffect, useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import Nav from '../component/Nav';
import {
  CircleUserRound,
  LogOut,
  ShoppingBasket,
  ShoppingCart,
  Users,
} from "lucide-react";
import { getUser, getUserByid } from "../services/userService";

const AdminLayout = ({children}) => {
  const token = JSON.parse(localStorage.getItem('token'))
  const [user, setuser] = useState()
   useEffect(()=>{
       const loadUser = async ()=>{
      setuser(await getUserByid(token))
       }
       loadUser()
   })

  const data = [
    { id: 1, title: "Profile", path: "/profile", icon: <CircleUserRound /> },
    { id: 2, title: "User", path: "/user", icon: <Users /> },
    { id: 3, title: "Product", path: "/product", icon: <ShoppingBasket /> },
    { id: 4, title: "Cart", path: "/cart", icon: <ShoppingCart /> },
    { id: 5, title: "Logout", path: "/logout", icon: <LogOut /> },
  ];

  return (
    <div className="w-full h-screen flex flex-col">
      <Nav />

      <div className="w-full h-full flex">
       
        <div className="w-[220px] h-full bg-white border-r border-gray-300">
          <div className="w-full flex flex-col gap-4 px-4 py-6">
            {data.map((item) => (
         !(item.title === "User" && user?.role === "user") &&
        <>
              
              <NavLink
              
                key={item.id}
                to={item?.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition
                  ${
                    isActive
                      ? "bg-black text-white"
                      : "text-gray-500 hover:bg-gray-100"
                  }`
                }
              >
                
               <>
                <span className="w-5 h-5">{item.icon}</span>
                <h1 className="text-sm font-medium">{item.title}</h1>
               </>
              </NavLink>
         
         </>
            ))}
          </div>
        </div>

       
        <div className="flex-1 p-4">{children}</div>
      
      </div>
    </div>
  );
};

export default AdminLayout;
