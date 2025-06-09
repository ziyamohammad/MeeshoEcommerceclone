
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Fullpage from './components/Fullpage';
import Signup from './components/Signup';
import { useState } from 'react';
import Product from './components/Product';

function App() {
  const [login,setlogin]=useState();
  const[user,setuser]=useState();

  const handlelogin=(login,number)=>{
    setlogin(login);
    setuser(number);
  }

   const handlelogout = () => {
    setlogin(false);
    setuser(""); 
  };
  return (
    <div className="App">
     
      <Router>
         <Navbar login={login} user={user} handlelogout={handlelogout}/>
        <Routes>
          <Route path="/" element={<Fullpage/>}/>
          <Route path="/signup" element={<Signup handlelogin={handlelogin}/>}/>
          <Route path="/product" element={<Product/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
