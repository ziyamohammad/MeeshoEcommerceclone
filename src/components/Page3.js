import React, { useState } from 'react'
import {companies} from './constant'
import "./Page3.css";

const Page3 = () => {
    const [random]=useState([
        {
            name:"Summer Dresses",
            img:"https://images.meesho.com/images/marketing/1744635893307.webp"
        },
        {
            name:"Baggy Jeans",
            img:"https://images.meesho.com/images/marketing/1744635812270.webp"
        },
        {
            name:"Earrings",
            img:"https://images.meesho.com/images/marketing/1744635870215.webp"
        },
        {
            name:"Chic Flats",
            img:"https://images.meesho.com/images/marketing/1744635846873.webp"
        },
    ])
  return (
    <div className="page3">
        <div className="companyslider">
            {companies.map((item)=>{
                return(
                    <div className="companie">
                        <span className = "companylogo">
                            <img src= {item.logo} alt="/" height="100%" width="100%" />
                        </span>
                    </div>
                )
            })}
        </div>
        <div className="page3shop">
            <span className="page3shopimg">
                <img src = "https://images.meesho.com/images/marketing/1744698143534.webp" alt ="/" height="100%" width="100%" />
            </span>
            <div className="random">
            {random.map((item)=>{
                return(
                    <div className="randomboth">
                        <span className="randomimg">
                             <img src = {item.img} alt ="/" height="100%" width="100%" />
                        </span>
                        <span className = "randomtext">{item.name}</span>
                    </div>
                )
            })}
            </div>
        </div>

      
    </div>
  )
}

export default Page3
