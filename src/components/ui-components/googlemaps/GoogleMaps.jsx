import React from 'react'
import { GoogleMap, LoadScript,Marker,InfoWindow } from '@react-google-maps/api';
import { Row, Col } from "react-flexbox-grid";
import { Input,Button } from "reactstrap";
import { useRef, useState,useEffect } from 'react'
import "./GoogleMaps.scss";
import { firebase } from '../../../firebase/index';
import img1 from '../../../assets/images/image_1.png';
import img2 from '../../../assets/images/image_2.png';
import img3 from '../../../assets/images/image_3.png';
import img4 from '../../../assets/images/image_4.png';

import img5 from '../../../assets/images/image_5.png';
import img6 from '../../../assets/images/image_6.png';
import img7 from '../../../assets/images/image_7.png';
import img8 from '../../../assets/images/image_8.png';
const center = {
  lat: 14.556586,
  lng: 121.023415
};

function GoogleMaps() {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    //unsubscribe();
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };
  const numbers = [1, 2, 3, 4, 5];
  const [PostedPrograms,setPostedPrograms] = useState([])
  const [getMarker,setgetMarker] = useState(false)
  var PostedPrograms1=[]
  const docRef =  firebase.firestore().collection('OPPORTUNITIES')
 .where("typeOfPost",'==','livelihoodkits');
 
// Update the document title using the browser API
// console.log("clicked me")
  //unsubscribe();  
  //return <Marker position={{lat: 14.556586,lng: 121.023415}} />
  const showMarker=()=>{
  //unsubscribe();
    console.log("click")
    setgetMarker(true)
  }

  useEffect(() => {
    console.log("useeffer")
    docRef.onSnapshot((querySnapshot)=>{

      //const PostedPrograms = [];
       querySnapshot.forEach((doc) => {
        const { title, typeOfPost, location, organization, organizationLogo, coverImage, businessSize, applicationLink, date, dateCreated, datePosted,lat,lng } = doc.data();
        PostedPrograms.push({
          key: doc.id,
          doc, // DocumentSnapshot
          title,
          typeOfPost,
          location,
          organization,
          organizationLogo,
          coverImage,
          businessSize,
          applicationLink,
          datePosted,
          date,
          dateCreated,
          lat,
          lng
        });
       // console.log("lat: "+ lat,)
        //console.log("lng: "+ lng,)
      });
      //
      PostedPrograms1 = PostedPrograms
      console.log(PostedPrograms)
      PostedPrograms.map( data=>{
        console.log("data lat:" + data.lat)
        console.log("data lng:" + data.lng)
       // return <Marker position={{lat: data.lat,lng: data.lng}} />
        
      })



    })
    //onCollectionUpdate();
    //viewMarker();
   }, []);
//setPostedPrograms(PostedPrograms);

  return (
    <>
    <h1 className="weight800 font40 text-center">
    Our programs
    </h1>
    <p className="font20 text-center">
            See current programs availabe and where they are located.
            </p>
            <br/><br/>
    <LoadScript
      googleMapsApiKey="AIzaSyDgPg74KjHq13XAj5fjVjF_RkAaeBgLWUQ"
    >
        <center>
      <GoogleMap
        mapContainerClassName="map-container"
        center={center}
        zoom={6}
        onClick={showMarker}
      >

        {
          getMarker?PostedPrograms.map( data=>{ 
            console.log(data.lat)  
            return (
            <>

            <Marker 
            key={data.key} 
            position={{lat: data.lat,lng: data.lng}}
            onClick={() => handleActiveMarker(data.key)} >
               {activeMarker === data.key ? (
            <InfoWindow 
            position={{ lat: data.lat, lng: data.lng }}
            onCloseClick={() => setActiveMarker(null)}
            >
              <div>
                <p key={data.key}><b>Title:</b> <i>{data.title}</i></p>
                <p key={data.key}><b>Date:</b> <i>{data.datePosted}</i></p>
                <p className='weight400 font12'><i><a href="https://app.sikap.com.ph">sign up</a> now to view more programs!</i></p>
              </div>
            </InfoWindow>
          ) : null}
            </Marker>
            </>
            )
          }):<></>
        }
       
      </GoogleMap>
      <br/><br/><br/><br/><br/><br/>
      </center>
    </LoadScript>
    <center>
    <div style={{width:"100%"}}>
          <div style={{display:'inline-block',paddingRight:'10px'}}>
              <img class="images" src={img1}/>
          </div>
          <div style={{display:'inline-block',paddingRight:'10px'}}>
              <img class="images" src={img2}/>
          </div>
          <div style={{display:'inline-block',paddingRight:'10px'}}>
              <img class="images" src={img3}/>
          </div>
          <div style={{display:'inline-block',paddingRight:'10px'}}>
              <img class="images" src={img4}/>
          </div>
    </div>
    <div>
          <div style={{display:'inline-block',paddingRight:'10px'}}>
              <img class="images" src={img5}/>
          </div>
          <div style={{display:'inline-block',paddingRight:'10px'}}>
              <img class="images" src={img6}/>
          </div>
          <div style={{display:'inline-block',paddingRight:'10px'}}>
              <img class="images" src={img7}/>
          </div>
          <div style={{display:'inline-block',paddingRight:'10px'}}>
              <img class="images" src={img8}/>
          </div>
    </div>
    </center>
    </>
  )
  
}

export default React.memo(GoogleMaps)