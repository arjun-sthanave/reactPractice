// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/authSlice";
import uiReducer from '../feature/ui/uiSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui : uiReducer
  
  },
});
