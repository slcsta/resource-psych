import React, {useState} from 'react';
import './Accordion.css';
import  { AccordionData } from './AccordionData';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #fff;
    `;

const AccordionContainer = styled.div`
    position: relative;
    top: 30%;
    box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
    max-width: 48.75rem;
    margin-bottom: 2rem;
`;

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: center;
    cursor: pointer;

    h1 {
        padding: 2rem;
        font-size: 2rem;
        color: #777;
        display: block;
        font-weight: 300;
    }

    span { 
        margin-right: 1.5rem;
    }
`;

const Dropdown = styled.div `
    background: #fff;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   

    .css-fix {
        white-space: pre-wrap;
    }
    

    p {
        color: #777;
        position: relative;
        max-width: 500px;
        font-size: 16px;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;


const Accordion = () => {
    const [clicked, setClicked] = useState(false)

    const toggle = index => {
        if(clicked === index) {
            //if clicked question is already active, then close it
            return setClicked(null)
        }
        setClicked(index) 
    }

    return (    
        <IconContext.Provider value={{ color: '#000FFB9', size: '25px'}}>
            <AccordionSection>
                <AccordionContainer>
                    {AccordionData.map((item, index) => {
                        return (
                            <>
                            <Wrap onClick={() => toggle(index)} key={index}>
                            <h1>{item.question}</h1>
                            <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                            </Wrap>
                            {clicked === index ? (
                            <Dropdown>
                            <p className="css-fix">{item.answer}</p>
                            </Dropdown>
                            ) : null}
                            </>
                        )
                    })}
                </AccordionContainer>
            </AccordionSection >
        </IconContext.Provider>
    );
};

export default Accordion;

