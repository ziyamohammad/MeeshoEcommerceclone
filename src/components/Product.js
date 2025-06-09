import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Product.css";
import {ShoppingCart , ChevronsRight} from "lucide-react";

const Product = ({ props }) => {
  const [data, setdata] = useState({})

  useEffect(() => {
    const fetchsingle = async () => {
      const response = await axios.get(`https://dummyjson.com/products/${props}`)
      console.log(response.data);
      setdata(response.data)  // ✅ Set actual product data
    }
    fetchsingle();
  }, [props])

  useEffect(() => {
    console.log("Updated items:", data.thumbnail);
  }, [data])

  return (
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
            <button className ="addtocard"><ShoppingCart/>Add to Cart</button>
            <button className ="buynow"><ChevronsRight/>Buy Now</button>
        </div>
        </div>
      </div>
      <div className="productdescription"></div>
    </div>
  )
}

export default Product
