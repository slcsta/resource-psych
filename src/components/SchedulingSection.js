import React from 'react';
import './SchedulingSection.css'
import '../App.css'
import ContactForm from './ContactForm.js'
import { Button } from './Button.js';


function SchedulingSection() {
    return (
        <>
            <div className='scheduling-container'>
                <h1>Request a Consultation</h1><br></br>
                    <Button buttonStyle='btn--outline'>Schedule Online</Button><br></br><br></br>
                
                    <ContactForm />
            </div>
        </>

    );
}

export default SchedulingSection;