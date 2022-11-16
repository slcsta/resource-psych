import React from 'react';
import './BioSection.css'
import '../App.css'

function BioSection() {
    return (
            <section className="hero">
                <img className="dr-img" width="386" height="595" src='./images/img-1.jpg' alt="Matthew Soden, M.D." />
                    <div className="bio-matt">
                        <h1 className="bio-title">Matthew Soden, MD</h1><br></br>
                        <p id="bio-text">
                        <h4>EDUCATION, TRAINING, MEMBERSHIPS</h4> 
                        B.A.: Columbia University<br></br>
                        M.D.: Case Western Reserve University School of Medicine<br></br>
                        Residency (Pediatrics): UCSF Children’s Hospital Oakland<br></br>
                        Residency (Psychiatry): University of Washington<br></br>
                        Fellowship (Child and Adolescent Psychiatry): Maine Medical Center<br></br>
                        Board Certified in Psychiatry by the American Board of Psychiatry and Neurology<br></br>
                        Member: American Psychiatric Association<br></br>
                        Member: American Academy of Child and Adolescent Psychiatry</p><br></br>

                        <p id="welcome">Welcome to the website for my private practice. In addition to this private 
                        practice, I work at a very busy community mental health center where I see children, 
                        adolescents and adults. I hope that the information here will be helpful in 
                        determining if I am the right clinician for you or your loved one.</p>

                        <p id="welcome">I approach our work together from a caring, nonjudgmental perspective. It’s my job to respect your
                        voice and listen.</p>
                        
                        <p id="welcome">I can provide advice about whether medication might be helpful for what you are experiencing. My
                        background in physical medicine has afforded me expertise in evaluating the physical origins of
                        emotional distress. While medication can sometimes be helpful for some people I also encourage my
                        patients to explore the impact of healthy nutrition, physical activity and other lifestyle choices that
                        contribute to emotional health.</p>

                        <p id="welcome">I offer individual and family therapy which might include elements of cognitive 
                        behavioral therapy, dialectical behavior therapy, motivational interviewing and 
                        family therapy. Naturally, family therapy can be an important part of addressing 
                        family conflict. Family therapy can also help caregivers manage the stress and 
                        challenges of caring for a loved one with a mental health condition.</p>

                        <p id="welcome">Some of the conditions that I commonly evaluate and treat include:</p>
                        <ul>
                        <li>mood disorders (depression and bipolar disorder)</li>
                        <li>trauma related disorders</li>
                        <li>anxiety</li>
                        <li>psychosis</li>
                        <li>attention-deficit hyperactivity disorder</li>
                        <li>interpersonal conflict</li>
                        <li>cultural stressors</li>
                        <li>issues that often affect LGBTQ+ individuals</li>
                        <li>professionals in crisis</li>
                        <li>neurodevelopmental issues</li>
                        <li>autism spectrum disorder</li>
                        <li>behavioral concerns including defiance</li>
                        <li>excessive use of electronics</li>
                        <li>academic difficulties</li>  
                        </ul>

                        <p id="welcome">I am happy to collaborate with your primary care provider, therapist or 
                        other healthcare professionals that contribute to your well-being.</p>
                    </div>
            </section>
    );
}

export default BioSection;