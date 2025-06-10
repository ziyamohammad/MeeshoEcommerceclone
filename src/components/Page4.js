
import { useEffect, useState } from "react";
import "./Page4.css";
import axios from "axios";
import Item from "./Item";
import { useNavigate } from "react-router";

const Page4 = ({handledisplay}) => {
     const navigate = useNavigate();
     const[items,Setitems]=useState([]);

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
    console.log("Updated pro:", items);
  }, [items]);

  const handlenavigate = (item) =>{
    navigate("/product")
    handledisplay(item)
  }
  return (
    <div className = "page4">
        <div className="page4row">
            {items.map((item)=>{
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
  )
}

export default Page4
