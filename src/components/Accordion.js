import React from 'react';
import './Accordion.css';
import  { AccordionData } from './AccordionData';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div ``

const AccordionContainer = styled.div ``

const Accordion = () => {
    return (    
        <IconContext.Provider value={{ color: '#000FFB9', size: '25px'}}>
            <AccordionSection>
                <AccordionContainer>
                    {AccordionData.map((item, index) => {
                        return (
                            <>
                            <h1>{item.question}</h1>
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

