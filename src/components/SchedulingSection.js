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
                    <div className='address-container'> 
                    <p>Locations:</p>
                    <ul className='columns' data-columns='2'>
                        <li><p>California</p>
                            1300 Clay St, Suite 600<br></br>
                            Oakland, CA 94612<br></br>
                            833-807-2167
                        </li>
                        <li><p>Colorado</p>
                            501 S Cherry St, Suite 1100<br></br>
                            Denver, CO 80246<br></br>
                            833-807-2167
                        </li>
                        <li><p>Washington</p>
                            8 S 1st Ave, Suite G<br></br>
                            Yakima, WA 98902<br></br>
                            206-717-7393
                        </li>
                    </ul>
                    </div>
                    <ContactForm />
            </div>
        </>

    );
}

export default SchedulingSection;