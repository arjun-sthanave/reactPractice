import product from "../data/products.json"

export const getProduct = ()=>{
    return Promise.resolve(product)
}

export const getProductByid = (id)=>{
    return Promise.resolve(product.find((p) => p.id == id))
}