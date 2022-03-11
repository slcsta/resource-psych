import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button.js';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Resource Family Psychiatry <i class='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'> 
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link></li>
                        <li className='nav-item'> 
                            <Link to='/meet-dr-soden' className='nav-links' onClick={closeMobileMenu}>Meet Dr. Soden</Link></li>
                        <li className='nav-item'> 
                            <Link to='/treatment' className='nav-links' onClick={closeMobileMenu}>Treatment</Link></li>
                        <li className='nav-item'> 
                            <Link to='/scheduling' className='nav-links' onClick={closeMobileMenu}>Scheduling</Link></li>
                        <li className='nav-item'> 
                            <Link to='/faqs' className='nav-links' onClick={closeMobileMenu}>FAQs</Link></li>
                        <li><a target="_blank" href="https://luminello.com/features/patient-client-portal/"  className='nav-links-mobile' onclick={closeMobileMenu}>New Patients</a></li>
                        <li><a target="_blank" href="https://app2.luminello.com/auth/login" className='nav-links-mobile' onclick={closeMobileMenu}>Current Patients</a></li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>New Patients</Button>}
                    {button && <Button buttonStyle='btn--outline'>Current Patients</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;