// routes/AppRoutes.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../screens/Login";

import Profile from "../pages/Profile";
import User from "../pages/User";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import AdminLayout from "../layout/AdminLayout";


const AppRoutes = () => {
  return (
    <Routes>
     
      <Route path="/login" element={<Login />} />

      
 <Route
        path="/admin"
        element={
         
            <Navigate to="/profile" replace />
          
        }
      />
      <Route
        path="/profile"
        element={
         
            <AdminLayout>
              <Profile />
            </AdminLayout>
        
        }
      />

      <Route
        path="/user"
        element={
          
            <AdminLayout>
              <User />
            </AdminLayout>
    
        }
      />

      <Route
        path="/product"
        element={
          
            <AdminLayout>
              <Product />
            </AdminLayout>
         
        }
      />

      <Route
        path="/cart"
        element={
          
            <AdminLayout>
              <Cart />
            </AdminLayout>
         
        }
      />


    </Routes>
  );
};

export default AppRoutes;
