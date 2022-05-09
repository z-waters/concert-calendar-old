import React from "react";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About/About";
import ConcertsPage from "./components/Events/ConcertsPage";
import Calendar from "./components/Calendar";
import Banner from "./components/Banner"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  
  return (
    <Router>
      
      <div className="App" >
        <Banner />
        <Navbar />
        <ScrollToTop />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concerts" element={<ConcertsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      
      </div>
      
    </Router>
    
  );
}

export default App;
