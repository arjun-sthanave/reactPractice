import React, { useState } from "react";
import Nav from "../../component/Nav";
import {
  CircleUserRound,
  LogOut,
  ShoppingBasket,
  ShoppingCart,
  Users,
} from "lucide-react";

const Dashboard = () => {
  const data = [
    { id: 1, title: "Profile", label: "profile", icon: <CircleUserRound /> },
    { id: 2, title: "User", label: "user", icon: <Users /> },
    { id: 3, title: "Product", label: "product", icon: <ShoppingBasket /> },
    { id: 4, title: "Cart", label: "cart", icon: <ShoppingCart /> },
    { id: 5, title: "Logout", label: "logout", icon: <LogOut /> },
  ];

  const [select, setSelect] = useState(1);

  return (
    <div className="w-full h-screen flex flex-col ">
      <Nav />

      <div className="w-[220px] h-screen bg-white border-r border-gray-300 flex">
        <div className="w-full flex flex-col gap-4 px-4 py-6">
          {data.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelect(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition
                ${
                  select === item.id
                    ? "bg-black text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }
              `}
            >
              <span className="w-5 h-5">{item.icon}</span>
              <h1 className="text-sm font-medium">{item.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
