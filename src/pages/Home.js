import React from 'react';
import '../App.css';
import LogoSection from '../components/LogoSection';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <LogoSection />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;