import { Bell, CircleUserRound } from "lucide-react";

const Nav = () => {
  return (
    <nav className="w-full h-16 bg-black text-white p-6 flex items-center justify-between">
      
     

    
      <h1 className="text-xl font-bold tracking-wide">
      Notifications
      </h1>
      <div className="flex items-center gap-6">
      
        <button className="relative">
           <Bell/>
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="w-8 h-8 rounded-full  flex items-center justify-center">
             <CircleUserRound />
        </div>
      </div>

    </nav>
  );
};

export default Nav;
