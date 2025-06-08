
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Fullpage from './components/Fullpage';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
     
      <Router>
         <Navbar/>
        <Routes>
          <Route path="/" element={<Fullpage/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
