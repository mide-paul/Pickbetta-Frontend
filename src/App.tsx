import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

import { Home } from './pages/home'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import { Aboutus } from './pages/aboutus';
import { Privacy } from "./pages/privacy";
import { Terms } from "./pages/terms";


function App() {
  
  return (

      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
          <Footer />
          </Router>
      </div>
  );
};

export default App;
