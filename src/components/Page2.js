import React, { useState } from 'react'
import "./Page2.css";
import {BadgeCheck} from "lucide-react";
import companies from './constant';
const Page2 = () => {
    const [brands] = useState([
        {
            src:"https://images.meesho.com/images/marketing/1744635542873.webp"
        },
        {
            src:"https://images.meesho.com/images/marketing/1744635521751.webp"
        },
        {
            src:"https://images.meesho.com/images/marketing/1744635497001.webp"
        },
        {
            src:"https://images.meesho.com/images/marketing/1744635464683.webp"
        },
        {
            src:"https://images.meesho.com/images/marketing/1744635432891.webp"
        },
        {
            src:"https://images.meesho.com/images/marketing/1744635542873.webp"
        },
        {
            src:"https://images.meesho.com/images/marketing/1744635614888.webp"
        },
        {
            src:"https://images.meesho.com/images/marketing/1744635646070.webp"
        },
    ])
  return (
    <div className="page2">
      <div className="jewellery">
        <span className='jewelimage'>
            <img src ="https://images.meesho.com/images/marketing/1744698265981.webp" alt="/" height="100%" width="100%" />
        </span>
        <div className="fourimages">
            <span className="page2img">
                <img src="https://images.meesho.com/images/marketing/1744722796811.webp" alt="/" height="100%" width="100%" />
            </span>
            <span className="page2img">
                <img src="https://images.meesho.com/images/marketing/1744635113661.webp" alt="/" height="100%" width="100%" />
            </span>
            <span className="page2img">
                <img src="https://images.meesho.com/images/marketing/1744635139351.webp" alt="/" height="100%" width="100%" />
            </span>
            <span className="page2img">
                <img src="https://images.meesho.com/images/marketing/1744635189897.webp" alt="/" height="100%" width="100%" />
            </span>
          
            </div>
        </div>
        <div className="bothcontent2">
            <span className="head">
                <span>Original Brands <BadgeCheck fill="#6625FF" color="white" size="32px"/></span>
            </span>
            <div className="brandsdisplay">
                {brands.map((item)=>{
                    return(
                        <div className="brandimg">
                            <span className = "spanimg">
                             <img src = {item.src} alt="/" height="100%" width="100%" />
                             </span>
                        </div>
                    )
                })}
            </div>
            </div>

        </div>
      
    
  )
}

export default Page2
