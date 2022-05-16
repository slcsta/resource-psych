import React from 'react';
import './LogoSection.css'
import '../App.css'
//import '../App.js'

function LogoSection() {
    return (
        <div className='logo-container'>
            <video src="./videos/field-video-1.mp4" autoPlay loop muted />
            <h1>Resource Family Psychiatry</h1>
        </div>
    );
}

export default LogoSection;