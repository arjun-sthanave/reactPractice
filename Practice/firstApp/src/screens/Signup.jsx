import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: "Home",
    label: "home",
  },
  {
    id: 2,
    title: "About us",
    label: "about us",
  },
  {
    id: 3,
    title: "Contact",
    label: "contact",
  },
];

const Signup = () => {
  const [select, setSelect] = useState(null);

  return (
    <div className="w-full h-screen">
      <div className="w-full flex justify-around">
      {
        data.map((item,index)=>(
          <div onClick={()=>setSelect(item.id)} className={`text-black ${select==item.id && "text-red-500"}`}>{item.label}</div>
        ))
      }
      </div>
    </div>
  );
};

export default Signup;
