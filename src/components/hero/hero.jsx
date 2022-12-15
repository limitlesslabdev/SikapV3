import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from '../../assets/hero/hero_1.png';
//Components
import Button from '../ui-components/button/button';

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper_hero">
      <Row>
      <center>
        <Col md={12} lg={5} >
          <div className="hero-info">
            
            <h1 className="weight800 font60">
            Your partner towards MSME Resilience
            </h1>
            <p className="font24">
            Start your journey to business recovery and resilience with our different tips and opportunities for small businesses
            </p>
            <p className="font24">
          
            </p>
            <Button label="Get started"  />
          </div>
        </Col>
        </center>
      </Row>
    </div>
  </div>
);

export default hero;
