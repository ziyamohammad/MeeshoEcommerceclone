import {IndianRupee , Star} from "lucide-react";
import "./Page4.css";


const Item = (items) => {
 let{src,name,price,rating,reviews}=items
  return (
    <div className = "itemcard">
       <span className="itemcardimg">
         <img src ={src} alt="/" height="100%" width="100%" />
       </span>
       <div className="alignleft">
       <span className = "itemname">{name}</span>
       <span className="itemprice"><IndianRupee size="16px" fontWeight="bold"/>{price}</span>
       <span className = "deliveryon">Free Delivery</span>
       <div className="ratingreview">
        <span className = "rating">{rating}<Star fill="white" size="12px"/></span>
        <span className = "review">{reviews} reviews</span>
        </div>
        </div>
     

      
    </div>
  )
}

export default Item
