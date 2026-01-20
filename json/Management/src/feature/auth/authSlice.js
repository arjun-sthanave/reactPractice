import { createSlice } from "@reduxjs/toolkit";
import { jsxs } from "react/jsx-runtime";

const savedUser = JSON.parse(localStorage.getItem("authUser")) || []
const token = JSON.parse(localStorage.getItem('token')) || null
const initialState = {
  user: savedUser ,
  isAuthenticated: token,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signupSuccess: (state, action) => {
     
      state.isAuthenticated = true;
      state.error = null;
      console.log("s used",state.user);
      
      state.user.push(action.payload)
      localStorage.setItem("authUser", JSON.stringify(state.user));
    },

    loginSuccess: (state, action) => {
      
      
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem('token',JSON.stringify(action.payload.id))
      
     
    },

    authFailure: (state, action) => {
      state.error = action.payload;
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem("token");
      
    },
  },
});

export const {
  signupSuccess,
  loginSuccess,
  authFailure,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
