import './App.css';
import Navbar from './components/Navbar';
// import Pages from './pages/Pages';
import Footer from './components/Footer';
import React from 'react';
// 
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MeetDrSoden from './pages/MeetDrSoden';
import Scheduling from './pages/Scheduling';
import Services from './pages/Services';
import Faqs from './pages/Faqs';

function App() {
  return (
    <div>
        <Navbar />
          <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/meet-dr-soden" element={<MeetDrSoden/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/scheduling" element={<Scheduling/>}/>
                <Route path="/faqs" element={<Faqs/>}/>
          </Routes>
        {/* <Pages /> */}
        <Footer />
    </div>
  );
}

export default App;
