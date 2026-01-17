import React from 'react'

const Cards = () => {
  return (
     <div className="w-full bg-white rounded shadow p-4 space-y-3">
      
        <div className="w-full gap-2 flex flex-col items-start">
          <div className="p-3 w-1/3  rounded cursor-pointer border transition bg-blue-50 border-blue-400">
               <h3 className="font-medium">title</h3>
          <p className="text-sm">A new update is available for your app</p>

           <span className="text-xs text-blue-600 font-semibold">
              Unread
            </span>
          </div>
        </div>
    </div>
  )
}

export default Cards