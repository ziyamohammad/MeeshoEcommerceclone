import React from 'react'
import CartCard from './CartCard'
import "./Cart.css";
import { IndianRupee } from 'lucide-react';

const Cart = ({cart , setCart}) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="Cartcart">
        <div className="Cartdetails">
           <h3>Product Details</h3>
           {cart.map((item)=>{
            return(
              <CartCard  setCart={setCart} cart ={cart} title={item.title} price={item.price} src={item.images}/>
            )
           })}
           
        </div>
        <div className="pricedetails">
         <h3>Price Details ({cart.length}  Items)</h3>
         <div className="tpp">
         <span className = "total">Total Product Price</span>
         <span className="amount"><IndianRupee  size="18px" fontWeight="bold"/>{totalPrice}</span>
         </div>
         <div className="ordertotal">
         <h3>Order Total </h3>
         <span className="amount"><IndianRupee  size="18px" fontWeight="bold"/>{totalPrice}</span>
         </div>
         <button className="cont">Continue</button>
         </div>
      

    </div>
  )
}

export default Cart
