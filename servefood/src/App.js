import './App.css';
import Home from './screen/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './screen/Login';


function App() {
  return (
    <Router>
      <div>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;