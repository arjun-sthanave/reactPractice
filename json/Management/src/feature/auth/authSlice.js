import { createSlice } from "@reduxjs/toolkit";

const savedUser = JSON.parse(localStorage.getItem("authUser")) || []

const initialState = {
  user: savedUser ,
  isAuthenticated: !!savedUser,
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
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
      console.log("user",user);
      
     
    },

    authFailure: (state, action) => {
      state.error = action.payload;
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem("authUser");
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
