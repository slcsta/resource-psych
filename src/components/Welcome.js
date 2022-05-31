import React from 'react';
import './Welcome.css';

function Welcome() {
    return (
        <div className='welcome-container'>
            <h2>Welcome</h2>
            <p>Resource Family Psychiatry is the private practice of board-certified 
            psychiatrist Matthew Soden, MD.<br></br>
            Dr. Soden provides quality psychiatric care to patients of all ages in California, Colorado 
            and Washington via secure video conferencing. There is limited availability for in person 
            appointments.</p><br></br> 
            <div className='welcome-links'>
                <div className="welcome-link-wrapper">
                   <div className="welcome-link-items"></div> 
                </div>
            </div>
        </div>
    )
}

export default Welcome;