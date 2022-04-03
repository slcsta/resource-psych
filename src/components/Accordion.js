import React from 'react';
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
    postion: relative;
    height: 100vh;
    background: #fff;
    `;

const AccordionContainer = styled.div`
    position: absolute;
    top: 30%;
    box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
    background: #272727;
`

const Accordion = () => {
    return (    
        <IconContext.Provider value={{ color: '#000FFB9', size: '25px'}}>
            <AccordionSection>
                <AccordionContainer>
                    {AccordionData.map((item, index) => {
                        return (
                            <>
                            <Wrap>
                            <h1>{item.question}</h1>
                            <span></span>
                            </Wrap>
                            <p>{item.answer}</p>
                            </>
                        )
                    })}
                </AccordionContainer>
            </AccordionSection >
        </IconContext.Provider>
    );
};

export default Accordion;

