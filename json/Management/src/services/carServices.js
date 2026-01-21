import cart from '../data/cart.json'

export const getCart = ()=>{
    return Promise.resolve(cart)
}
export  const getCartById = (id)=>{
    return Promise.resolve(cart.find((c)=>c.id == id))
}
import carts from "../data/cart.json";

export const getAllCartProducts = () => {
 
  const rows = carts.flatMap((cart) =>
    cart.products.map((product) => ({
      cartId: cart.id,
      userId: cart.userId,
      totalProducts: cart.totalProducts,
      totalQuantity: cart.totalQuantity,

      productId: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
      total: product.total,
      discountedTotal: product.discountedTotal,
      thumbnail: product.thumbnail,
    }))
  );

  return rows; 
};
