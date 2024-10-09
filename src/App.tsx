import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

import { Home } from './pages/home'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import { Aboutus } from './pages/aboutus';
import { Privacy } from "./pages/privacy";
import { Terms } from "./pages/terms";
import { Faqs } from "./pages/faqs/faqs";
import { Pricing } from "./pages/pricing";
import { Subscriptions } from "./pages/faqs/subscriptions";
import { Features } from "./pages/faqs/features";
import { Data } from "./pages/faqs/data";
import { Generalnfl } from "./pages/faqs/generalnfl";
import { Betting } from "./pages/faqs/betting";
import { Nflbettingrules } from "./pages/faqs/nflbettingrules";
import { Nflbettingtips } from "./pages/faqs/nflbettingtips";
import { Generalquestions } from "./pages/faqs/generalquestions";
import { Financialmanagement } from "./pages/faqs/financialmanagement";
import { Timemanagement } from "./pages/faqs/timemanagement";
import { Understandingtheodds } from "./pages/faqs/understandingtheodds";
import { Pickbettaterms } from "./pages/faqs/pickbettaterms";
import { Sportbettingterms } from "./pages/faqs/sportbettingterms";
import { Nflbettingterms } from "./pages/faqs/nflbettingterms";
import { Sportsbookterms } from "./pages/faqs/sportsbookterms";


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
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/features" element={<Features />} />
            <Route path="/data" element={<Data />} />
            <Route path="/generalnfl" element={<Generalnfl />} />
            <Route path="/betting" element={<Betting />} />
            <Route path="/nflbettingrules" element={<Nflbettingrules />} />
            <Route path="/nflbettingtips" element={<Nflbettingtips />} />
            <Route path="/generalquestions" element={<Generalquestions />} />
            <Route path="/financialmanagement" element={<Financialmanagement />} />
            <Route path="/timemanagement" element={<Timemanagement />} />
            <Route path="/understandingtheodds" element={<Understandingtheodds />} />
            <Route path="/pickbettaterms" element={<Pickbettaterms />} />
            <Route path="/sportbettingterms" element={<Sportbettingterms />} />
            <Route path="/nflbettingterms" element={<Nflbettingterms />} />
            <Route path="/sportsbookterms" element={<Sportsbookterms />} />
          </Routes>
          <Footer />
        </Router>
      </div>
  );
};

export default App;
