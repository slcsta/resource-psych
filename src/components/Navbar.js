import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // const showButton = () => {
    //     if(window.innerWidth <= 960) {
    //         setButton(false);
    //     } else {
    //         setButton(true);
    //     }
    // };

    // useEffect(() => {
    //     showButton();
    // }, []);

    // window.addEventListener('resize', showButton);
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <img src='./images/logo.jpg' alt='logo' />
                        Resource Family Psychiatry 
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
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link></li>
                        <li className='nav-item'> 
                            <Link to='/scheduling' className='nav-links' onClick={closeMobileMenu}>Contact Us</Link></li>
                        <li className='nav-item'> 
                            <Link to='/faqs' className='nav-links' onClick={closeMobileMenu}>FAQs</Link></li>
                        {/* <li><a href='https://app2.luminello.com/matthewsodenmd/form' target="_blank" rel="noopener noreferrer" className='nav-links-mobile' onClick={closeMobileMenu}>
                            New Patients
                            </a></li>
                        <li><a href='https://app2.luminello.com/auth/login' target="_blank" rel="noopener noreferrer" className='nav-links-mobile' onClick={closeMobileMenu}>
                            Current Patients
                            </a></li> */}
                        {/* <li><a href="https://app2.luminello.com/matthewsodenmd/form" target="_blank" rel="noopener noreferrer"  className='nav-links-mobile' onClick={closeMobileMenu}>New Patients</a></li>
                        <li><a href="https://app2.luminello.com/auth/login" target="_blank" rel='noopener noreferrer' className='nav-links-mobile' onClick={closeMobileMenu}>Current Patients</a></li> */}
                    </ul>
                    {/* {button && <Button buttonStyle='btn--outline'>New Patients</Button>}
                    {button && <Button buttonStyle='btn--outline'>Current Patients</Button>} */}
                </div>
            </nav>
        </>
    )
}

export default Navbar;