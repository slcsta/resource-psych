import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

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
                        {/* <li className='nav-item'> 
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link></li> */}
                        <li className='nav-item'> 
                            <Link to='/scheduling' className='nav-links' onClick={closeMobileMenu}>Contact Us</Link></li>
                        <li className='nav-item'> 
                            <Link to='/faqs' className='nav-links' onClick={closeMobileMenu}>FAQs</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;