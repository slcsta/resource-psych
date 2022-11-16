import React from 'react';
import '../App.css';
import LogoSection from '../components/LogoSection';
// import Cards from '../components/Cards';
import Welcome from '../components/Welcome';


function Home() {
    return (
        <>
            <LogoSection />
            <Welcome />
            {/* <Cards /> */}
        </>
    );
}

export default Home;