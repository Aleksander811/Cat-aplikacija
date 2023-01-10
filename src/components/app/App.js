import './App.css';
import Main from '../main/Main';
import Navigation from "../navigation/Navigation";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from '../about/About';

const App = ()=> {
  return (
    <div className="container">
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
