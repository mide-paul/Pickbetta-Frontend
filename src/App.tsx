import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

import { Home } from './pages/home'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import { Aboutus } from './pages/aboutus';


function App() {
  
  return (

      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
          </Routes>
          <Footer />
          </Router>
      </div>
  );
};

export default App;
