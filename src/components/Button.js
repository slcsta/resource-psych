import React from 'react';
import './Butoon.css'
import {link} from 'react-router-dom'

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonsize = SIZES.includes(buttonSize) ? buttonSize
}