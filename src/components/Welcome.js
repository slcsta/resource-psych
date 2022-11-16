import React from 'react';
import './Welcome.css';

function Welcome() {
    return (
        <div className='welcome-container'>
            <h2>Welcome</h2>
            <p>Resource Family Psychiatry is the private practice of board-certified 
            psychiatrist Matthew Soden, MD. Dr. Soden provides quality psychiatric care 
            to children, adolescents and adults residing in California, Colorado and 
            Washington via secure, HIPAA compliant video conferencing.</p><br></br> 
            <div className='welcome-links'>
                <div className="welcome-link-wrapper">
                   <div className="welcome-link-items"></div> 
                </div>
            </div>
        </div>
    )
}

export default Welcome;