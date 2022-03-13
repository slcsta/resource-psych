import React from 'react';
import './SchedulingSection.css'
import '../App.css'
import { Button } from './Button.js';

function SchedulingSection() {
    return (
        <>
            <div className='scheduling-container'>
                <h1>Scheduling</h1>
                <h2>Add Button Links to Luminello</h2>
                <h2>Email form</h2>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="form-input"/>
                        <Button buttonStyle='btn--outlin'>Email Us</Button>
                    </form>
                </div>

            </div>
        </>

    );
}

export default SchedulingSection;