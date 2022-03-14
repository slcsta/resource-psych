import React from 'react';
import './Welcome.css';

function Welcome() {
    return (
        <div className='welcome-container'>
            <h2>Welcome to Resource Family Psychiatry</h2><br></br>

            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Maecenas porttitor congue massa.</p><br></br>
            
            <p>Fusce posuere, magna sed pulvinar ultricies, purus lectus 
                malesuada libero, sit amet commodo magna eros quis urna.</p><br></br> 
                
            <p>Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. 
                Pellentesque habitant morbi tristique senectus et netus 
                et malesuada fames ac turpis egestas.</p><br></br>
             
            <p>Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. 
                In porttitor. Donec laoreet nonummy augue.</p><br></br> 
                
           <p>Suspendisse dui purus, scelerisque at, vulputate vitae, 
                pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. 
                Ut nonummy.</p><br></br>

            <div className='welcome-links'>
                <div className="welcome-link-wrapper">
                   <div className="welcome-link-items">

                       </div> 
                </div>
            </div>
        </div>
    )
}

export default Welcome;