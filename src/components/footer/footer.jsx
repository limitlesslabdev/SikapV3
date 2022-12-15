import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Link } from "react-scroll";
import "./footer.scss";

import Logo from '../../assets/footer/logo.png';
import Arrow from '../../assets/footer/arrow.svg';

const footer = () => (
  <div className="footer">
    <div className="wrapper">
      <Row>
        <Col xs>
          <div className="footer-box">
            <img src={Logo} alt="logo" width="200px" />
            <br/>
            <p>SIKAP— or Synergizing Recovery Initiatives, Knowledge, and Adaptation Practices for
               MSMEs—is a unified online business recovery hub that will help micro,
               small, and medium enterprises (MSMEs) bounce forward to the “next normal.”</p>
          </div>
        </Col>
        <Col xs>
          
          <div className="footer-box">
          
            <h3 className="weight800 font20">About SIKAP</h3>
            <p>What is SIKAP?</p>
            <p>Frequently Asked Questions</p>
            <p>Terms and Conditions</p>
            <br/><br/>
            {/*
            <h3 className="weight800 font20">Quarantine Guidelines</h3>
            <p>ECQ Guidelines</p>
            <p>MECQ Guidelines</p>
            <p>GCQ Guidelines</p>
            <p>MGCQ Guidelines</p>*/}
</div>
        </Col>
        <Col xs>
          <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
          <div className="footer-box">
            <h3 className="weight800 font20">Opportunities</h3>
            <p>Business Recovery Tips</p>
            <p>Loans and Other Funding</p>
            <p>Programs for MSMEs</p>
            <p>Traning and Events</p>
            </div>            
            <div className="footer-box back-to-top">
              <p>BACK TO TOP</p>
              <img src={Arrow} alt="arrow" />
            </div>
          </Link>
        </Col>
      </Row>
     
    </div>
  </div>
);
export default footer;
