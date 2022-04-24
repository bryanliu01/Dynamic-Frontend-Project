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
                <i>
                  {click ? <FontAwesomeIcon icon={faBars}/>: <FontAwesomeIcon icon={faTimes}/>}
                </i>
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
              </ul>
            </div>
        </nav>
    </>
  )
}

export default Navigate