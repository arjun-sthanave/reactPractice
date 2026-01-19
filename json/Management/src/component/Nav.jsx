import { Bell, CircleUserRound } from "lucide-react";

const Nav = () => {
    
  return (
    <nav className="w-full   h-16 bg-white text-black border-b border-[#B1B1B1]  p-6 flex items-center justify-between">
      
     

    
      <h1 className="text-xl font-bold tracking-wide">
      REDUX
      </h1>
      <div className="flex items-center gap-6">
      
        <button className="relative">
           <Bell/>
          {/* <span className="absolute -top-3 -right-5 w-2 h-6  bg-red-500 rounded-full"></span> */}
        </button>

        <div className="w-8 h-8 rounded-full  flex items-center justify-center">
             <CircleUserRound />
        </div>
      </div>

    </nav>
  );
};

export default Nav;
