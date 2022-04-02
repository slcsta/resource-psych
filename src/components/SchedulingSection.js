import React from 'react';
import './SchedulingSection.css'
import '../App.css'
import ContactForm from './ContactForm.js'


function SchedulingSection() {
    return (
        <>
            <div className='scheduling-container'>
                <h1>Scheduling</h1>
                <h2>Add Button Links to Luminello</h2><br></br>
                <h2>Contact Us</h2>
                <ContactForm />
            </div>
        </>

    );
}

export default SchedulingSection;