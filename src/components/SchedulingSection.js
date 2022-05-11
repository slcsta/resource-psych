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
                
                <h1>For Questions Contact Us Via Email</h1>
                <ContactForm />
            </div>
        </>

    );
}

export default SchedulingSection;