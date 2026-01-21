import axios from "axios"
import user from "../data/user.json"
import { api } from "./api"
// import api from '../services/api'

export const getUser = async()=>{
    try {
        const res = await axios.get('https://dummyjson.com/users')
        return res.data.users
    } catch (error) {
        return null
    }
}

//
export const getUserByid = async(id)=>{

    const res = await axios.get('https://dummyjson.com/users')
    return res.data.users.find((u) => u.id == id)
}