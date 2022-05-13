import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import MeetDrSoden from './MeetDrSoden';
import Scheduling from './Scheduling';
import Services from './Services';
import Faqs from './Faqs';
import '../App.css'

function Pages() {
    return (
        <>
            <Routes>
                <Route path="/resource-psych/" element={<Home/>}/>
                <Route path="/meet-dr-soden" element={<MeetDrSoden/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/scheduling" element={<Scheduling/>}/>
                <Route path="/faqs" element={<Faqs/>}/>
            </Routes>
        </>
    );
}

export default Pages;
