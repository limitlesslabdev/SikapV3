import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import About from "../../assets/about/about.png";
import Person02 from "../../assets/about/person02.png";
import becomePartner from '../../assets/opportunities/becomePartner.png';

const about = () => (
  <div id="about">
    <div className="wrapperAbout">
      <br/><br/><br/><br/><br/>
    <h1 className="weight800 font40 text-center">
    About SIKAP
            </h1>
            <p className="font20 text-center">SIKAP is your one-stop-shop for MSME Business Recovery</p>
            <br/><br/>
      
    </div>
    <Row>
     
    <div className="about-image">
            <img src={About} alt="hero" />
            <br/><br/><br/>
            <p style={{color:'grey'}}className="font16 text-center"><strong>SIKAP or "Synergizing Recovery Initiatives, Knowledge, and Adaptation Practices for MSMEs"</strong> is an online COVID-19 recovery hub that aims to equip micro, small, and medium businesses in the Philippines with the right information and knowledge on how they can adapt and redesign their operations in light of the COVID-19 pandemic across the globe.

The platform also contains a collection of funding opportunities and projects by different organizations that MSMEs can take advantage of during these trying times.</p>
          </div>
        
    </Row>
  </div>
);

export default about;
