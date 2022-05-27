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
                        <h1>Phone:</h1>
                            <a href="tel:833-807-2167">833-807-2167</a>
                        <h1>Fax:</h1>
                            <a href="fax:253-215-4399">253.215.4399</a>
                    </div>
                    <ContactForm />
            </div>
        </>

    );
}

export default SchedulingSection;