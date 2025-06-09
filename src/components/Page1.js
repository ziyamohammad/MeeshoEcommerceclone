import axios from 'axios';
import "./Page1.css";
import React, { useEffect, useState } from 'react'

const Page1 = () => {
  const[category,SetCategory] = useState([]);
  const[categoryProducts,SetcategoryProducts]=useState([])
  const[hovered,sethovered]=useState();
  const[images]=useState([
    {
      name:"Woman Dresses",
      src:"https://images.meesho.com/images/marketing/1744634725496.webp"
    },
     {
      name:"Ethnic Dresses",
      src:"https://images.meesho.com/images/marketing/1744634654837.webp"
    },
      {
      name:"Menswear",
      src:"https://images.meesho.com/images/marketing/1744634780426.webp"
    },
      {
      name:"Footwear",
      src:"https://images.meesho.com/images/marketing/1744634814643.webp"
    },
      {
      name:"Home Decor",
      src:"https://images.meesho.com/images/marketing/1744634835018.webp"
    },
      {
      name:"Beauty",
      src:"https://images.meesho.com/images/marketing/1744634871107.webp"
    },
      {
      name:"Accessories",
      src:"https://images.meesho.com/images/marketing/1744634909968.webp"
    },
      {
      name:"Grocery",
      src:"https://images.meesho.com/images/marketing/1744634937295.webp"
    },
    
  ])

 useEffect(()=>{
  const fetchcategories = async()=>{
    try{
      const response = await axios.get("https://dummyjson.com/products/categories")
       SetCategory(response.data);
    
      

    }catch(error){
      console.log("error");
    }
  }
  fetchcategories();
  
 },[])

 const handleMouseEnter= async(name)=>{
   sethovered(name)
  try{
    const response = await axios.get(`https://dummyjson.com/products/category/${name}?limit=1000`)
    SetcategoryProducts(response.data.products)
  }catch(error){
    console.log("error");
  }
 }

 const handleleave = () => {
    sethovered(null);
  SetcategoryProducts([])
 }

  // useEffect(() => {
  //   console.log("Updated categories:", category);
  // }, [category]);
   

  return (
    <div className="page1">
    <div className="categoryslider" onMouseLeave={handleleave}>
      {category.map((item)=>{
        return(
          <div className={hovered===item.name?"type1":"types"}  onMouseEnter={() => handleMouseEnter(item.name)}>
            {item.name}
            {hovered===item.name && categoryProducts.length>0 &&(
              <div className = "categorywise">
                {categoryProducts.map((i)=>{
                 
                  return(
                    <div className = "productdisplay">{i.title}</div>
                  )
                
                })}
              </div>
            )}
          </div>
        
        )
      })}
    </div>
    <div className="bothcontent">
    <div className="landingimage">
     <img src= "./img1.png" alt="/" height="100%" width="100%" />
      </div>
     <div className="landingquotes"> 
      <div className="bothspan">
       <span>Smart Shopping</span>
       <span>Trusted by Millions</span>
       </div>
       <button className="landingshop">Shop now</button>
     </div>
     </div>
     <div className="featurebackground">
      <div className="features">
        <div className="all">
        <div className="return">
          <span className= "returnimg"><img src = "https://www.meesho.com/assets/Icons/returns.svg" alt ="/" height="100%" width="100%" /></span>
          <span className = "returncontent">7 Days Easy Return</span>
        </div>
        <div className="delivery">
         <span className= "returnimg"><img src = "https://www.meesho.com/assets/Icons/cod.svg" alt ="/" height="100%" width="100%" /></span>
          <span className = "returncontent">Cash on Delivery</span>
          </div>
        <div className="price">
           <span className= "returnimg"><img src = "https://www.meesho.com/assets/Icons/lowest-price.svg" alt ="/" height="100%" width="100%" /></span>
          <span className = "returncontent">Lowest Prices</span>
        </div>
        </div>
      </div>
      </div>
      <div className="page1productsdisplay">
        {images.map((item)=>{
          return (
            <div className="page1product">
              <span className="productimg">
              <img src = {item.src} alt="/" height="100%" width="100%" />
              </span>
              <span>{item.name}</span>
            </div>
          )
        })}
      </div>
   
    </div>
  )
}

export default Page1
