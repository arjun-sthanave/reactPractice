import React from 'react'
import Nav from '../component/Nav'
import Cards from '../component/Cards'

const Homepage = () => {
  return (
    <div className='w-full relative h-screen flex flex-col  items-center '>
      
        <Nav/>
         <div className="w-full flex flex-col gap-3 mt-20">
            <Cards/>
         </div>
      
    </div>
  )
}

export default Homepage