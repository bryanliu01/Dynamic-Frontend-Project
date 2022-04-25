import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

//Below is an initiliased array of CSS classes that we can toggle
const STYLES = ['btn--primary', 'btn--outline']

//Below is an initialised array of button sizes
const SIZES = ['btn-medium', 'btn-large'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    //Check if there is a new button style, otherwise
    //it will default to the first button style element
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    //Check if there is a new button size, otherwise 
    //it will default to the first button size element
    const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonSize
    : SIZES[0];

    return (
        <Link to='sign-up' className='btn-mobile'> {/*
            We use backtick for multiline strings and enable variable insertions.
            Additionally, the dollar sign is a JavaScript identifier, which mean
            identify an object in the same  way a name would. In this case we can
            assign the variable checkButtonStyle etc as a name to className.*/}
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>

    )
};