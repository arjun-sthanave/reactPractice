import React from 'react'

const Protectedroute = () => {

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
  
}

export default Protectedroute