import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

const App = () => {


  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
 
 
  
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Redux Toolkit Counter</h1>
      <p className="text-lg">Count: {count}</p>

      <div className="flex gap-2 mt-4">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() =>{
dispatch(incrementByAmount(5))

        } }>+5</button>
      </div>
    </div>
  );
};

export default App;
