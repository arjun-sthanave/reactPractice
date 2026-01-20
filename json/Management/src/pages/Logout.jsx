import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../feature/auth/authSlice'

const Logout = () => {
  const dispatch = useDispatch()
  return (
    <button onClick={()=>{
    dispatch(logout())
    }} className='p-2 bg-black text-white rounded-sm' >Logout</button>
  )
}

export default Logout