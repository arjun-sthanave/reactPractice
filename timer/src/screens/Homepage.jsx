import React from 'react'
import Nav from '../component/Nav'
import Cards from '../component/Cards'
import Addtask from '../component/Addtask'

const Homepage = () => {
  return (
    <div className='w-full relative h-screen flex flex-col  items-center '>
      
        <Nav/>
         <div className="w-full flex flex-row gap-3 mt-20 justify-around">
            <Cards/>
            <Addtask/>
         </div>
      
    </div>
  )
}

export default Homepage