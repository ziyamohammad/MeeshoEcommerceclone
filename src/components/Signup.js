import React, { useRef, useState } from 'react';
import "./Signup.css"
import axios from 'axios';
import { useNavigate } from 'react-router';

const Signup = ({handlelogin}) => {
  const[value,setvalue]=useState("")
  const[display,setdisplay]=useState(false)
  const[loggedin,setloggedin]=useState(false)
  const navigate = useNavigate();
  const[otp,setotp]= useState(["", "", "", "", "", ""]);
   const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);
  const fifthRef = useRef(null);
  const sixthRef = useRef(null);
  

  const handleotp = async() =>{
   try{
     await axios.post(`http://localhost:3000/api/v1/user/otp-sent`,{
      number:value
   })
    setdisplay(true)
    
   }catch(error){
     console.log("error sending the otp",error);
   }
  }

  const handlenavigate = () => {
    setdisplay(false);
    setvalue("");
  }

  const handleverify =async() =>{
    const joinednumber = otp.join('');
    console.log(joinednumber);
    try{
    await axios.post(`http://localhost:3000/api/v1/user/otp-verify`,{
      phone:value,
      code:joinednumber
    })
    setloggedin(true);
    handlelogin(true , value);
    console.log("user verified successfully");
    navigate("/")
  }catch(error){
    console.log("user not verified");
   }
  }

   const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return; // Only allow digits or empty

    const newOtp = [...otp];
    newOtp[index] = value;
    setotp(newOtp);

    // Move to next field if current is filled
    if (value.length === 1) {
      switch (index) {
        case 0: secondRef.current.focus(); break;
        case 1: thirdRef.current.focus(); break;
        case 2: fourthRef.current.focus(); break;
        case 3: fifthRef.current.focus(); break;
        case 4: sixthRef.current.focus(); break;
        default: break;
      }
    }
  };
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
          {display && (
            <div className ="otp">
              <span className = "otphead">Enter OTP sent to {value}</span>
              <span className = "changenumber" onClick={handlenavigate}>CHANGE NUMBER</span>
              <div className = "otpinputs">
              <input type="tel" maxLength={1} className="first"   ref={firstRef}  value={otp[0]} onChange={(e)=> handleChange(0, e.target.value)}/>
               <input type="tel" maxLength={1} className="second" ref={secondRef}  value={otp[1]} onChange={(e)=> handleChange(1, e.target.value)}/>
                 
                <input type="tel" maxLength={1} className="third" ref={thirdRef}  value={otp[2]} onChange={(e)=> handleChange(2, e.target.value)}/>
                   
                 <input type="tel" maxLength={1} className="four" ref={fourthRef}  value={otp[3]} onChange={(e)=> handleChange(3, e.target.value)}/>
                    
                  <input type="tel" maxLength={1} className="five" ref={fifthRef}  value={otp[4]} onChange={(e)=> handleChange(4, e.target.value)}/>
                      
                   <input type="tel" maxLength={1} className="six"ref={sixthRef}  value={otp[5]} onChange={(e)=> handleChange(5, e.target.value)}/>
                    
              </div>
            </div>
          )}
        </div>
        <button className = {display?"formsubmitbut1":"formsubmitbut"} onClick={handleotp}>Continue</button>
        <button className = {display?"formverifybut1":"formverifybut"} onClick={handleverify}>Verify</button>
      </div>
      
    </div>
  )
}

export default Signup
