import { createSlice } from "@reduxjs/toolkit";

// console.log("data",data);
const data = JSON.parse(localStorage.getItem('count'))
const initialState = {
  value: data || 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
       localStorage.setItem('count',JSON.stringify(state.value))
    },
    decrement: (state) => {
      state.value -= 1;
       localStorage.setItem('count',JSON.stringify(state.value))
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
        localStorage.setItem('count',JSON.stringify(state.value))
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
