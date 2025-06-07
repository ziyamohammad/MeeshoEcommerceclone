
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Fullpage from './components/Fullpage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Fullpage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
