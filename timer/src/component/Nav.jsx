import { Bell, CircleUserRound } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const Nav = () => {
      const { select } = useAppContext();
  return (
    <nav className="w-full h-16 bg-black text-white p-6 flex items-center justify-between">
      
     

    
      <h1 className="text-xl font-bold tracking-wide">
      Notifications
      </h1>
      <div className="flex items-center gap-6">
      
        <button className="relative">
           <Bell/>
          <span className="absolute -top-3 -right-5 w-2 h-6 w-6 bg-red-500 rounded-full">{select}</span>
        </button>

        <div className="w-8 h-8 rounded-full  flex items-center justify-center">
             <CircleUserRound />
        </div>
      </div>

    </nav>
  );
};

export default Nav;
