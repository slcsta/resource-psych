import React from 'react';
import './SchedulingSection.css'
import '../App.css'
import ContactForm from './ContactForm.js'
import { Button } from './Button.js';


function SchedulingSection() {
    return (
        <>
            <div className='scheduling-container'>
                <h1>Request a Consultation</h1>
                    <Button buttonStyle='btn--outline'>New Patients</Button>
                    <div id='contact-container'>
                        <p><tel>Phone: <a href="tel:833-807-2167">833-807-2167</a></tel></p>       
                        <p><fax>Fax: <a href="fax:253-215-4399">253-215-4399</a></fax></p>      
                    </div>
                    <ContactForm />
            </div>
        </>

    );
}

export default SchedulingSection;