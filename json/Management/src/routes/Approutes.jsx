// routes/AppRoutes.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../screens/Login";

import Profile from "../pages/Profile";
import User from "../pages/User";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import AdminLayout from "../layout/AdminLayout";
import Signup from "../screens/Signup";
import Protectedroute from "./Protectedroute";
import Logout from "../pages/Logout";
import Publicroute from "./Publicroute";
import Loggedroute from "./Loggedroute";


const AppRoutes = () => {
  return (
    <Routes>
     

      <Route path="/login" element={<Publicroute><Login /></Publicroute>} />
      <Route path="/signup" element={<Signup />} />
     
      
      <Route
        path="/profile"
        element={
         
           <Protectedroute>
            <AdminLayout>
              <Profile />
            </AdminLayout>
          </Protectedroute>
        
        }
      />

      <Route
        path="/user"
        element={
          
               <Protectedroute>
            <AdminLayout>
            <Loggedroute>
                <User />
            </Loggedroute>
            </AdminLayout>
          </Protectedroute>
    
        }
      />

      <Route
        path="/product"
        element={
          
               <Protectedroute>
            <AdminLayout>
              <Product />
            </AdminLayout>
          </Protectedroute>
         
        }
      />

      <Route
        path="/cart"
        element={
          
           <Protectedroute>
            <AdminLayout>
              <Cart />
            </AdminLayout>
          </Protectedroute>
         
        }
      />
      <Route
        path="/logout"
        element={
          
           <Protectedroute>
            <AdminLayout>
              <Logout />
            </AdminLayout>
          </Protectedroute>
         
        }
      />


    </Routes>
  );
};

export default AppRoutes;
