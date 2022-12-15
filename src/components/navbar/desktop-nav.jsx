import React from 'react';
import { Link } from "react-scroll";
 // SCSS
import './navbar.scss';
// Assets
import LogoImg from '../../assets/navbar/logo.png';
import MobileMenuIcon from '../../assets/navbar/mobile-menu.svg';

import Button from '../ui-components/button/button';
import {About} from '../about/about'

const desktopNav = (props) => (

  <nav className={`Navbar ${!props.userIsScrolled ? "extraLargeNavbar" : ""}`}>
    <div className="wrapper flex-s-between">
      <div>
        <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
          <img src={LogoImg} alt="logo" className="pointer" width="400px" />
        </Link>
      </div>
      <div className="mobile__menu" onClick={props.mobileMenuOpen}>
        <img src={MobileMenuIcon} alt="menu" />
      </div>
      <div className="desktop__menu">
        <ul className="flex-s-between ">
        <li>
            <a href="/">
              <p style={{color:"grey"}}>Home</p>
            </a>
          </li>
          {/*
        <li>
            <a href="/about">
            <p style={{color:"grey"}}>About</p>
            </a>
</li>*/}
          <li>
            <a href="https://app.sikap.com.ph/pages/login">
            <p style={{color:"grey"}}>Log in</p>
            </a>
          </li>
          <li>
          <Button label="SIGN UP"  />
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default desktopNav;