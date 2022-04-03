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
                    {}
                </AccordionContainer>
            </AccordionSection >
        </IconContext.Provider>
    );
};

export default Accordion;

