import user from "../data/user.json"

export const getUser = ()=>{
    return Promise.resolve(user)
}

export const getUserByid = (id)=>{
    return Promise.resolve(user.find((u) => u.id == id))
}