
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Fullpage from './components/Fullpage';
import Signup from './components/Signup';
import { useState } from 'react';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  const [login,setlogin]=useState();
  const[user,setuser]=useState();
  const[props,setprops]=useState();
  const[cart,setCart]=useState([]);

  const handlelogin=(login,number)=>{
    setlogin(login);
    setuser(number);
  }

   const handlelogout = () => {
    setlogin(false);
    setuser(""); 
  };

  const handledisplay = (item) =>{
     setprops(item)
  }

  const handlemovecart = (cart)=>{
    setCart(cart)
  }
  return (
    <div className="App">
     
      <Router>
         <Navbar login={login} user={user} handlelogout={handlelogout}/>
        <Routes>
          <Route path="/" element={<Fullpage handledisplay={handledisplay}/>}/>
          <Route path="/signup" element={<Signup handlelogin={handlelogin}/>}/>
          <Route path="/product" element={<Product props={props} handlemovecart={handlemovecart}/>}/>
           <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
