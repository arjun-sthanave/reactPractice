import React, { useState } from 'react'

const App = () => {
  const [bluetbn, setbluetbn] = useState(false)
  const [orangebtn, setorangebtn] = useState(false)
  const [redbtn, setedbtn] = useState(false)
  console.log("bluetbn",bluetbn);
  console.log("orangebtn",orangebtn);
  console.log("redbtn",redbtn);
  
  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <div onClick={()=>{
        setedbtn(!redbtn)
      }}   className={`w-1/2 bg-white h-1/2 ${orangebtn && "bg-orange-500"}  text-white text-4xl font-bold flex justify-around items-center`}>
           <button onClick={(e)=>{
            e.stopPropagation()
         setbluetbn(!bluetbn)
      }} className={`bg-black p-4 ${redbtn && "bg-red-500"} rounded-sm`}>click 1</button>
           <button onClick={(e)=>{
            e.stopPropagation()
          setorangebtn(!orangebtn)
      }}  className={`bg-green-500 p-4 ${bluetbn && "bg-blue-500"} rounded-sm`}>click 2</button>
      </div>
    </div>
  )
}

export default App
