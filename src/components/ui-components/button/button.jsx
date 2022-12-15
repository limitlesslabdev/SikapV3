import React from "react";
//import { Link } from "react-scroll";
// SCSS
import "./button.scss";

const hero = (props) => (
  
  <div className={props.label=="Download the toolkit" || props.label=="Explore Journey"
  || props.label=="Download Policy Recommendations"
  ||props.label=="View Opportunities"?"buttonTransparent":"button"}>
    <button
      className={props.label=="Download the toolkit" || props.label=="Explore Journey"
      || props.label=="Download Policy Recommendations"
      ||props.label=="View Opportunities"?"button-linkTransparent":"button-link"}
      onClick={(e) => {
        if(props.label == "Download the toolkit"){
          e.preventDefault();
          window.location.href='https://drive.google.com/file/d/1pD7DvEFACCfreBUny0ZbO77-lJ7IoaSo/view';
          
        }
        else if(props.label == "Download Policy Recommendations"){
          e.preventDefault();
          window.location.href='https://drive.google.com/file/d/1E5Pcw8B3n57F4JWaZemCKwSYOQW23eAA/view';
        }
        else{
          e.preventDefault();
          window.location.href='https://app.sikap.com.ph/login/register';
        }
        
        }}
    >
      {props.label}
    </button>
  </div>
);

export default hero;
