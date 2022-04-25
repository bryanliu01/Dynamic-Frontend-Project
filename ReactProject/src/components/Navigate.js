import React, {useState} from 'react'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWpexplorer } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navigate.css';
import { Button } from './Button';


function Navigate() {
  const [click, setClick] = useState(false);
  const[buttonIsActive, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //Here is a responsive design example
  const showButton = () => {
    //If the width of the window is less than 960 pixels, we show the button as false
    if(window.innerWidth <= 960) {
      setButton(false);
    }
    else {
      setButton(true);
    }
  };
  //The navigation bar will be checking when to show the button
  window.addEventListener('resize', showButton);
  //We can return html syntax within a js file
  return (
    <>
        <nav className="navigate">
            <div className="navigate-container">
              <Link to="/" className="navigate-logo">
                DELVE <FontAwesomeIcon icon={faWpexplorer}/>
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fa-times': 'fa-bars' }>
                  {click ? <FontAwesomeIcon icon={faTimes}/>: <FontAwesomeIcon icon={faBars}/>}
                </i>
              </div>
              {/*Draw the navigation menu components if the menu is active*/}
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to ='/services' className='nav-links' onClick={closeMobileMenu}>
                    Services
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to ='/products' className='nav-links' onClick={closeMobileMenu}>
                    Products
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to ='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                    Sign Up
                  </Link>
                </li>
              </ul>
              {/*The format (condition && RETURN) is a shorthand way of writing conditionals
              Here, if the conditional of button is true, we return a button with an outline
              along with the text: SIGN UP.
              
              Additionally Button is a custom element class. A quick shortcut is to click on Button, press 
              ctrl-space, and click Button. This will import the element automatically at the top of
              our js file*/}
              {buttonIsActive && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navigate