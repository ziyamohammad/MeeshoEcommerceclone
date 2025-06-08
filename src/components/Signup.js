import React, { useState } from 'react';
import "./Signup.css"

const Signup = () => {
  const[value,setvalue]=useState("")
  const[display,setdisplay]=useState(false)


  return (
    <div className = "signup">
      <div className="mainsignup">
        <span className = "mainimg">
          <img src ="https://images.meesho.com/images/marketing/1661417516766.webp" alt ="/" width="100%" height="100%" />
        </span>
        <div className="signupform">
          <span className = "formtext">Sign Up to view your profile</span>
          <div className="formheading">
          <span className="country">Country</span>
           <span className={value !== "Phone Number" && value !== "" ? "number2" : "number1"}>Phone Number</span>
          </div>
          <div className = "number">
            <span className="countrycode"><span className = "co">IN </span>+91</span>
            <input type = "tel" className = {value !== "Phone Number" && value !== "" ? "phonenumber" : "phonenumber1"} value={value} onChange={(e)=>setvalue(e.target.value)}></input>
          </div>
        </div>
        <button className = "formsubmitbut">Continue</button>
      </div>
      
    </div>
  )
}

export default Signup
