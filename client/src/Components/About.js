import React from 'react';
import { Icon } from 'react-icons-kit';  
import { IKImage } from 'imagekitio-react';
import {download} from 'react-icons-kit/fa/download';
const About = (props) => {
    
    if(props.data){
      var name = props.data.name;
      var profilepic = `tr:w-original,f-webp/portfolio/${props.data.image}`;
      var bio = props.data.bio;        
      var cellphone = props.data.cellphone;  
      var cellphoneTo = props.data.telephoneTo;  
      var email = props.data.email;
      var mailTo = props.data.mailTo;   
      var resumeDownload = props.data.resumedownload;
    }
    
    const urlEndpoint = 'https://images.eahassan.com';

    return (
      <section id="about" className="page-section">
      <div className="row">
         <div className="three columns">        
            <IKImage
                  urlEndpoint={urlEndpoint}
                  path={profilepic}
                  width="120" 
                  height="120"
                  alt="Evan Hassan's Profile Pic"
                  className="profile-pic"
                  loading="lazy"/>  
         </div>
         <div className="nine columns main-col">
            <h2>{props.title}</h2>
            <p className="about-speech-bubble">{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
				     <span>{name}</span><br />
                     <span><a href={cellphoneTo} aria-label="Cellphone">{cellphone}</a></span><br />
                     <span><a href={mailTo} aria-label="E-Mail">{email}</a></span> <br />
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="btn" title="Download resumé" aria-label="Download Resumé" rel="noopener noreferrer" target="_blank"><span className="mr"><Icon icon={download} size={18} focusable="false" aria-hidden="true"/></span>Download Resumé</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  
}

export default About;
