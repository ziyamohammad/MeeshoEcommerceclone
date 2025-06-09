import React, { useEffect, useState } from 'react'
import {Search , User , ShoppingCart , ShoppingBag , LogOut} from "lucide-react"
import { Link, useLocation, useNavigate } from 'react-router'
import axios from 'axios'

const Navbar = ({login,user,handlelogout}) => {
  const[hover,sethover] =useState(false)
    const[items,Setitems]=useState([]);
    const[filtered,setfiltered]=useState([])
  const[product,setproduct]=useState()

  const[loginned,setloginned]=useState(login)
  const navigate = useNavigate();
  const location = useLocation();
  const isSignuppage = location.pathname ==="/signup";
  
 const handlechange = (e) =>{
  setproduct(e.target.value)
 }
  const handlemouse = () => {
    sethover(true)
    console.log(login)
    console.log(user)
  }

  const handleleave=() => {
    sethover(false)
  }
 
  const handlesign=()=>{
    navigate("/signup")
   }

useEffect(()=>{
    const fetchitems = async()=>{
        try{
           const response = await axios.get('https://dummyjson.com/products?limit=150')
           console.log(response.data.products)
           Setitems(response.data.products);
        }catch(error){
            console.log("Error");
        }
    }

    fetchitems();
},[])

useEffect(() => {
    console.log("Updated items:", items);
  }, [items]);

useEffect(() => {
  if (product?.trim()) {
    setfiltered(items.filter(item =>
      item.title.toLowerCase().includes(product.toLowerCase())
    ));
    console.log(filtered)
  } else {
    setfiltered([]);
  }
}, [product, items]);

 
  return (
    <div className = "navbar" onMouseLeave={handleleave}>
        <span className = "img">
      <img src = "./meesho.svg" alt="/" height="100%" width="100%"  />
      </span>
      <span className = "searchbox">
         <Search/>
         <input type = "text" className = "searchinput" placeholder="Try Saree, Kurti or Search by Product Code" value={product} onChange={handlechange} />
         {filtered.length>0 && (
          <div className = "filteredproduct">
            {filtered.map((item)=>{
              return(
                <div className="searchproduct" key={item.id}>
                  <Search/>{item.title}
                </div>
              )
            })}
          </div>
         )}
      </span>
      <div className={isSignuppage?"allrest1":"allrest"}>
        <p>Become Supplier</p>
          <span className="same"></span>
         <p>Investor Relations</p>
         <span className={isSignuppage?"same1":"same"}></span>
           <span className ={isSignuppage?"navprofile1":"navprofile"}  onMouseEnter={handlemouse} ><User/>Profile
           {hover && (
            <div className = "navdropdown">
              <span className = "text">Hello User { login && user?user:"Guest"}</span>
              <p>To access your Meesho account</p>
            <button className ="navsignup" onClick={handlesign}>Sign Up</button>
              <span className ="navorders"><ShoppingBag size="18px"/>My Orders</span>
              <span className = "navdelete">Delete Account</span>
               <span className = {login?"navlogout":"navlogout1"} onClick={handlelogout}><LogOut/>Log Out</span>
            </div>
           )}
           </span>
      <span className = {isSignuppage?"navcart1":"navcart"}  ><ShoppingCart/>Cart</span>
      </div>
    
      
    
     

    </div>
  )
}

export default Navbar
