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
    position: absolute;
    top: 30%;
    box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
    background: #;
    color: #;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: center;
    cursor: pointer;

    h1 {
        padding: 2rem;
        font-size: 2rem;
    }

    span { 
        margin-right: 1.5rem;
    }
`;

const Dropdown = styled.div `
    background: #1c1c1c1c;
    padding: 4rem;
    color: #;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #000000;
    border-top: 1px solid #000000;

    p {
        padding: 4rem;
        font-size: 20px;
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
                            <p>{item.answer}</p>
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

