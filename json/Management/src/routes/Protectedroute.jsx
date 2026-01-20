import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const Protectedroute = ({children}) => {

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  console.log(isAuth);
  

  return isAuth ? <>{children}</> : <Navigate to="/login" replace />;
  
}

export default Protectedroute