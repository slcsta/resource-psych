import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        Resource Psychiatry <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    {button && <Button buttonStyle='btn--outline'>New Patients</Button>}
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
                            <Link to='/faq' className='nav-links' onClick={closeMobileMenu}>FAQs</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar