import React from 'react';
import './Welcome.css';

function Welcome() {
    return (
        <div className='welcome-container'>
            <h2>Welcome</h2>
            <p>Resource Family Psychiatry is the private telepsychiatry practice of 
            board-certified psychiatrist Matthew Soden, MD. Dr. Soden provides quality 
            psychiatric care via video conferencing to patients of all ages in California, 
            Colorado, and Washington states.</p><br></br> 
            <p></p><br></br> 
            <div className='welcome-links'>
                <div className="welcome-link-wrapper">
                   <div className="welcome-link-items"></div> 
                </div>
            </div>
        </div>
    )
}

export default Welcome;