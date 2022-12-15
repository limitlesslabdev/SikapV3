import React from "react";
import { Link } from "react-scroll";
// SCSS
import "./navbar.scss";
// Assets
import CloseIcons from '../../assets/navbar/mobile-close.svg';
import Logo from '../../assets/navbar/logo.png';
import Button from '../ui-components/button/button';
const mobileNav = (props) => (
  <div className={`mobile__navbar ${props.isOpen ? "mobile__open" : ""}`}>
    <div className="mobile__navbar-close" onClick={props.closeMobileMenu}>
      <img src={CloseIcons} alt="close" />
    </div>
    <div className="mobile__navbar-logo flex-center">
      <Link
        to="hero"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        onClick={props.closeMobileMenu}
      >
        <img src={Logo} alt="logo" />
      </Link>
    </div>
    <div className="mobile__navbar-menu">
      <ul>
        <li className="flex-center">
        <a href="/">
              <p style={{color:"grey",fontSize:"36px"}}>Home</p>
            </a>
        </li>
        <li className="flex-center">
        <a href="/about">
        <p style={{color:"grey",fontSize:"36px"}}>About</p>
            </a>
        </li>
        <li className="flex-center">
        <a href="https://app.sikap.com.ph/pages/login">
        <p style={{color:"grey",fontSize:"36px"}}>Log in</p>
            </a>
        </li>
       
        <li className="flex-center">
          <Button label="SIGN UP"  />
          </li>
      </ul>
    </div>
  </div>
);

export default mobileNav;
