// features/auth/uiSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 user : []
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    loadUser: (state, action) => {
       JSON.stringify(localStorage.setItem('user',state.user))
    },
    
  },
});

export const { loadUser } = uiSlice.actions;
export default uiSlice.reducer;
