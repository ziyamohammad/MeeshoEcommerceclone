import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Product.css";
import {ShoppingCart , ChevronsRight, Star, IndianRupee} from "lucide-react";
import Item from './Item';
import { useNavigate } from 'react-router';

const Product = ({ props, handledisplay ,handlemovecart }) => {
  const [data, setdata] = useState({})
  const[sitem,setsitem]=useState([]);
  const navigate = useNavigate();
 const [cart, setCart] = useState(() => {
  const stored = localStorage.getItem("cart");
  return stored ? JSON.parse(stored) : [];
});

// Sync cart to localStorage every time it updates
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

const handlecart = () => {
  setCart((prevCart) => [...prevCart, data]);
  handlemovecart(cart)
  navigate("/cart");
};

  useEffect(() => {
    const fetchsingle = async () => {
      const response = await axios.get(`https://dummyjson.com/products/${props}`)
      console.log(response.data);
      setdata(response.data) 
    }
    fetchsingle();
  }, [props])

 

 useEffect(() => {
  if (!data.category) return;
  const fetchsitem = async () => {
    const response = await axios.get(`https://dummyjson.com/products/category/${data.category}`)
    console.log("Similar products:", response.data);
    setsitem(response.data.products); // use `.products` because dummyjson returns `{ products: [...] }`
  }
  fetchsitem();
}, [data.category])

  useEffect(() => {
    console.log("Updated pro:", sitem);
  }, [sitem]);

  const handlenavigate = async(item) =>{

     const response = await axios.get(`https://dummyjson.com/products/${item}`)
      console.log(response.data);
      setdata(response.data) 
    }

  


  return (
    <div className="bothindivisual">
    <div className="indivisualproduct">
      <div className="productphoto">
        <div className="thumbnail">
          {data.thumbnail && (
            <img src={data.thumbnail} alt="Product Thumbnail" height="100%" width="100%" />
          )}
        </div>
        <div className="bothoriginal">
        <div className="original">
              <img src={data.images} alt="Product Thumbnail" height="100%" width="100%" />
        </div>
        <div className="buttons">
            <button className ="addtocard" onClick={handlecart}><ShoppingCart/>Add to Cart</button>
            <button className ="buynow" ><ChevronsRight/>Buy Now</button>
        </div>
        </div>
      </div>
      <div className="productdescription">
        <div className="important">
          <span className="impname">{data.title}</span>
            <span className="impdes">{data.description}</span>
          <span className ="impprice"><IndianRupee size="20px" fontWeight="bold"/>{data.price}</span>
           <div className="ratingreview1">
        <span className = "rating">{data.rating}<Star fill="white" size="12px"/></span>
        <span className = "review">3 reviews</span>
        </div>
         <span className = "deliveryon">Free Delivery</span>
        </div>
        <div className="size">
          <h6 className="sizehead">Select Size</h6>
          <span className="freesize">Free Size</span>
        </div>
        <div className="productpagedetails">
          <h6>Product Details</h6>
          <span className ="productname">Product Name : {data.title}</span>
          <span className="brand">Brand : {data.brand}</span>
          <span className="category">Category : {data.category}</span>
          <span className="netquantity">Net Quantity (N) : {data.stock}</span>
         {data.dimensions && (
  <>
    <span className="dimensions">Product Width : {data.dimensions.width}cm</span>
    <span className="dimensions">Product Height : {data.dimensions.height}cm</span>
    <span className="dimensions">Product Depth : {data.dimensions.depth}cm</span>
  </>
)}
           <span className="impdes">{data.description}</span>


        </div>
        <div className="ratingandreviews">
          <h6>Product Reviews and Ratings</h6>
          {(data.reviews || []).map((item)=>{
            return (
              <div className="customerratings">
                <span className="customername">{item.reviewerName}</span>
                  <div className="ratingreview1">
                     <span className = "rating1">{item.rating}<Star fill="white" size="12px"/></span>
                     <span className = "review">Posted on {item.date}</span>
                  </div>
                 <span className="customerreviews">{item.comment}</span>
                 <span className="customeremail">Email : {item.reviewerEmail}</span>

              </div>
            )
          })}
        </div>
      </div>
    </div>
    <div className="similarproducts">
      <h4>Similar Products</h4>
       <div className="page4row1">
            {(sitem || []).map((item)=>{
                return(
                    <div className="page4colomn" key={item.id} onClick={()=>handlenavigate(item.id)}>
                        <Item 
                        src={item.images[0]} 
                        name={item.title}
                        price={item.price}
                        
                        rating={item.rating}
                        reviews={item.reviews.length}
                        />
                    </div>
                )
            })}
        </div>

    </div>
    </div>
  )
}

export default Product
