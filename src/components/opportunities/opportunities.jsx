import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./opportunities.scss";
//Assets
import OpportunityImage from '../../assets/opportunities/opportunities.png';
import ToolkitImage1 from '../../assets/opportunities/toolkit1.png';
import ToolkitImage2 from '../../assets/opportunities/toolkit2.png';
import Journey from '../../assets/opportunities/testimonials.png';
import becomePartner from '../../assets/opportunities/becomePartner.png';
//Components
import Button from '../ui-components/button/button';


const opportunities = () => (
  <>
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
      <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={OpportunityImage} alt="hero" />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-info">
            
            <h1 className="weight800 font40">
            All opportunities for MSME recovery, in one place
            </h1>
            <p className="font20">
            From tips, to programs, and loan opportunities, SIKAP helps your business bounce back and navigate in the new normal
            </p>
            <Button label="View Opportunities"  />
          </div>
        </Col>
       
      </Row>
      <br/><br/><br/><br/><br/><br/>
      <Row>
      <Col md={12} lg={6} className="dlToolkit">
          <div className="hero-image">
            <center>
            <img src={ToolkitImage1} alt="hero" />
            <Button label="Download the toolkit"  />
            <br/><br/>
            <p className="font16">
            From business assessments to defining what strategies are necessary to plan ahead, 
            PUHON is the MSME Foresight Planning Toolkit designed to help you jumpstart your business continuity plans!
            </p>
            </center>
          </div>
        </Col>
        <Col md={12} lg={6} className="dlToolkit1">
          <div className="hero-image">
            <center>
            <img src={ToolkitImage2} alt="hero" />
            <Button label="Download Policy Recommendations"  />
            <br/><br/>
            <p className="font16">
            As the Philippines continue to navigate the COVID-19 Pandemic, 
            the path towards recovery and resilience remains a challenge to vital stakeholders. 
            </p>
            </center>
          </div>
        </Col>
      </Row>
      <br/><br/><br/><br/><br/><br/>
      <Row>
      
        <Col md={12} lg={6}>
          <div className="hero-info">
            
            <h1 className="weight800 font40">
            Track your progress in your journey to resilience
            </h1>
            <p className="font20">
            Earn badges as you go through your SIKAP journey. Check out opportunities, apply for mentoring opportunities and events
            </p>
            <Button label="Explore Journey"  />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={Journey} alt="hero" />
          </div>
        </Col>
      </Row>
      </div>
  </div>
      <br/><br/><br/><br/><br/><br/>

     
      <Row className="wrapper1">
      
        <Col md={12} lg={6}>
          <div className="hero-info1">
            
            <h1 className="weight800 font40">
        
              Become a SIKAP member today
            </h1>
            <p className="font20">
            ✓ Have your own MSME dashboard with a journey tracker
            <br/>
            ✓ Join LIVE Mentoring sessions with our KaSIKAP Mentors
            <br/>
            ✓ Be updated on new loan opportunities for MSMEs
            <br/>
            ✓ Access on Android, iPhone, or Desktop
            </p>
            <Button label="Become a Member Now"  />
            <br/><br/>
          </div>
        </Col>
        <Col md={12} lg={6} style={{marginLeft:'0px'}}>
          <div className="hero-image">
            <img src={becomePartner} alt="hero" width="50%" />
          </div>
        </Col>
      </Row>
      <div className="hero" id="hero">
    <div className="wrapper">

    <Row>
      
      <Col md={12} lg={6}>
        <div className="hero-info">
          
        <iframe frameborder="0"  width="500" height="400"  title="" src="https://covid19.pdrf.org/Publications/DIMATINAG-ENG/" 
        type="text/html" scrolling="no" marginwidth="0" marginheight="0" allowFullScreen></iframe>
          
          
        </div>
      </Col>
      <Col md={12} lg={6}>
      <div className="hero-info">
            
            <h1 className="weight800 font40">
            View MSME Resouces
            Dimatinag: The Entrepreneurs Unbreakable Spirit
            </h1>
            <p className="font16">
            In line with PDRF’s advocacy to strengthen MSME resilience, the Philippine Disaster Resilience Foundation and UPS co-developed a comic book that features the stories of entrepreneurs during the pandemic.
            Dimatinag: The Entrepreneurs Unbreakable Spirit is a story of Tina, a business owner who struggled during the 
            community quarantine until she discovers “Katatagan in a Box” – a special MSME tool that empowers entrepreneurial spirit through the power of business continuity. This comic book is a tale of 
            evolution and resilience which hopes to inspire and help other MSMEs win against COVID-19 pandemic.
            </p>
            <Button label="View More Resources"  />
          </div>
      </Col>
    </Row>
      </div></div>
      <br/><br/><br/>
      </>
);

export default opportunities;
