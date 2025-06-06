import React from 'react'
import {Search , User , ShoppingCart} from "lucide-react"

const Navbar = () => {
  return (
    <div className = "navbar">
        <span className = "img">
      <img src = "./meesho.svg" alt="/" height="100%" width="100%"  />
      </span>
      <span className = "searchbox">
         <Search/>
         <input type = "text" className = "searchinput" placeholder="Try Saree, Kurti or Search by Product Code" />
      </span>
      <div className="allrest">
        <p>Become Supplier</p>
          <span className= "same"></span>
         <p>Investor Relations</p>
         <span className= "same" ></span>
           <span className = "navprofile"><User/>Profile</span>
      <span className = "navcart"><ShoppingCart/>Cart</span>
      </div>
    
      
    
     

    </div>
  )
}

export default Navbar
