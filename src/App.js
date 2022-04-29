import Login from './components/Login.js';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";

import Register from './components/register.js';
import Sucess from './components/Sucess.js';
function App() {
  return (
    <Router>
      <div className="App">
        
      <Routes>
       
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/sucess" element={<Sucess />} />
      </Routes>

      </div>

    </Router>
  );
}

export default App;
