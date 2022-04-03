import React from 'react';
import './FaqsSection.css'
import '../App.css'
import Accordion from './Accordion.js'

function FaqsSection() {
    return (
        <>
            <div className='faqs-container'>
                <h1>FAQs</h1>
                <Accordion />
            </div>
        </>

    );
}

export default FaqsSection;