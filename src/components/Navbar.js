import React, { useState } from 'react'
import {Search , User , ShoppingCart , ShoppingBag} from "lucide-react"
import { Link, useLocation, useNavigate } from 'react-router'

const Navbar = () => {
  const[hover,sethover] =useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  const isSignuppage = location.pathname ==="/signup";
  

  const handlemouse = () => {
    sethover(true)
  }

  const handleleave=() => {
    sethover(false)
  }
 
  const handlesign=()=>{
    navigate("/signup")
   }

 
  return (
    <div className = "navbar" onMouseLeave={handleleave}>
        <span className = "img">
      <img src = "./meesho.svg" alt="/" height="100%" width="100%"  />
      </span>
      <span className = "searchbox">
         <Search/>
         <input type = "text" className = "searchinput" placeholder="Try Saree, Kurti or Search by Product Code" />
      </span>
      <div className={isSignuppage?"allrest1":"allrest"}>
        <p>Become Supplier</p>
          <span className="same"></span>
         <p>Investor Relations</p>
         <span className={isSignuppage?"same1":"same"}></span>
           <span className ={isSignuppage?"navprofile1":"navprofile"}  onMouseEnter={handlemouse} ><User/>Profile
           {hover && (
            <div className = "navdropdown">
              <span className = "text">Hello User</span>
              <p>To access your Meesho account</p>
            <button className ="navsignup" onClick={handlesign}>Sign Up</button>
              <span className ="navorders"><ShoppingBag size="18px"/>My Orders</span>
              <span className = "navdelete">Delete Account</span>
            </div>
           )}
           </span>
      <span className = {isSignuppage?"navcart1":"navcart"}  ><ShoppingCart/>Cart</span>
      </div>
    
      
    
     

    </div>
  )
}

export default Navbar
