import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { getUserByid } from '../services/userService';

const Loggedroute = ({children}) => {
 const navigate =    useNavigate()
  const [data, setdata] = useState()
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  useEffect(()=>{
    const loadUser = async ()=>{
       setdata(await getUserByid(isAuth))
    }
    loadUser()
  },[])
  
  
  

  return data?.role == 'admin' ? <>{children}</> : navigate('/profile') ;
  
}

export default Loggedroute