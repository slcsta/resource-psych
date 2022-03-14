import React from 'react';
import '../App.css';
import LogoSection from '../components/LogoSection';
import Cards from '../components/Cards';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <LogoSection />
            <Welcome />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;