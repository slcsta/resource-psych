import React from 'react';
import './BioSection.css'
import '../App.css'

function BioSection() {
    return (
        <>
            <section className="hero" id="about">
                <img className="hero-img" loading="lazy" id="avatar" src='./images/img-1.jpg' alt="Matthew Soden, M.D." />
                    <div className="bio animate__animated animate__shakeX">
                        <h1 className="bio-title">Matthew Soden, M.D.</h1>
                        <p className="bio-text">
                        Matthew Soden MD is a board-certified psychiatrist who is subspeciality trained in child and adolescent psychiatry.
                        Dr. Soden graduated from Columbia University and Case Western Reserve University School of Medicine.  
                        He completed residency training in pediatrics at UCSF Children’s Hospital Oakland and then went on to pursue psychiatry 
                        residency training at the University of Washington. Dr. Soden completed his fellowship training in child and adolescent 
                        psychiatry at Maine Medical Center.</p>
                        <p>Dr. Soden and his wife are the proud parents of three children.</p>
                    </div>
            </section>
        </>

    );
}

export default BioSection;