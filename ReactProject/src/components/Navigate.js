import React, {useState} from 'react'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWpexplorer } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


function Navigate() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
        <nav className="navigation">
            <div className="navigation-container">
              <Link to="/" className="navigate-logo">
                DELVE <FontAwesomeIcon icon={faWpexplorer}/>
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fa-times': 'fa-bars' }>
                  {click ? <FontAwesomeIcon icon={faTimes}/>: <FontAwesomeIcon icon={faBars}/>}
                </i>
              </div>
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
            </div>
        </nav>
    </>
  )
}

export default Navigate