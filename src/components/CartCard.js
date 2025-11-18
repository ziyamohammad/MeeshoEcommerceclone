import React from 'react'
import "./Cart.css";
import { Cross, IndianRupee, IndianRupeeIcon, X } from 'lucide-react';

const CartCard = ({src,title,price,cart , setCart}) => {

  const handleremove = (title) =>{
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const updatedCart = storedCart.filter((item) => item.title !== title);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  setCart(updatedCart);
  }

  return (
    <div className="Cartcard">
      <div className="cartimage">
        <div className="imgcart">
       <img src={src} alt="/" height="100%" width="100%"/>
       </div>
      </div>
      <div className="cartdetails">
        <span className="carttitle">{title}</span>
        <span className="cartprice"><IndianRupee  size="20px" fontWeight="bold"/>{price}</span>
        <span className="removeitem" onClick={()=>handleremove(title)}><X/>Remove</span>
     </div>

    </div>
  )
}

export default CartCard
