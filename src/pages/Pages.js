import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import MeetDrSoden from './MeetDrSoden';
import Scheduling from './Scheduling';
import Treatment from './Treatment';
import Faqs from './Faqs';
import '../App.css'

function Pages() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/meet-dr-soden" component={MeetDrSoden}/>
                <Route path="/treatment" component={Treatment}/>
                <Route path="/scheduling" component={Scheduling}/>
                <Route path="/faqs" component={Faqs} />
            </Routes>
        </>
    );
}

export default Pages;
