import React from 'react';
import './ServicesSection.css'
import '../App.css'

function ServicesSection() {
    return (
        <div className='services-section'>
            <h1>Services</h1>
                <div className='services-container'>
                    <p>Dr. Soden works collaboratively with patients and their families and believes in a holistic
                    approach to care that considers the biological, psychological, and social factors that contribute
                    to emotional health. His therapeutic approach is warm, compassionate, and nonjudgmental
                    with the aim to create an safe environment for progress to take place.</p>
                    <p>He has expertise in the evaluation and treatment of the following:</p>
                    <ul>
                        <li>neurodevelopmental issues</li>
                        <li>behavioral concerns</li>
                        <li>attention-deficit hyperactivity disorder</li>
                        <li>mood disorders (depression and bipolar disorder)</li>
                        <li>trauma related disorders</li>
                        <li>anxiety</li>
                        <li>psychosis</li>
                        <li>interpersonal conflict</li>
                        <li>cultural stressors</li>
                        <li>issues that often effect LGBTQ+ individuals</li>
                        <li>professionals in crisis</li>
                    </ul>
                    <p>In addition to medication evaluation, he offers psychotherapy services including individual and
                    family therapy. Dr. Soden advises that medications can be an important adjunct to care if
                    utilized with good judgement and consistent with evidence-based practices.</p>
                    <p>He is happy to collaborate with your primary care physician, therapist or other health
                    professionals that contribute to your well-being.</p>
                </div>
        </div>
    );
}

export default ServicesSection;