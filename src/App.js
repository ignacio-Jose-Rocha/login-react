import Login from './components/Login.js';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import Register from './components/Register.js';
function App() {
  return (
    <Router>

      <Routes>
        <div className="App">
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
        </div>
      </Routes>



    </Router>
  );
}

export default App;
