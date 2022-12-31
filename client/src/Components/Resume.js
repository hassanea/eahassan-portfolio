import React from 'react';
import { IKImage } from 'imagekitio-react';
import { Icon } from 'react-icons-kit';
import {graduationCap} from 'react-icons-kit/fa/graduationCap';

const Resume = (props) => {
    
    const urlEndpoint = "https://images.eahassan.com/";
    
    if(props.data){
      var skillmessage = props.data.skillmessage;
      var education = props.data.education.map(education => {
        return <div key={education.school}>
                <h3> <span className="mr">
                  <IKImage
                   urlEndpoint={urlEndpoint}
                   path="portfolio/icons/oakland-university-icon.png"
                   alt="Oakland University's Icon"
                   width="16"
                   height="16"
                   /> 
                      </span>
                 {education.school}</h3>
        <p className="info">{education.degree}<span className="mx"><Icon icon={graduationCap} size={22}/></span><em className="date">{education.graduated}</em></p>
        <p className="info"><span className="mx"> <IKImage urlEndpoint={urlEndpoint} path="portfolio/icons/award.svg" alt="" width="18" height="18"/>
        </span> {education.honors}</p> 
        <p className="education-desc">{education.description}</p></div>
      });
      var work = props.data.work.map(work => {
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span className="divider"></span> <em className="date">{work.years}</em>    
            </p>
            <p>{work.description}</p>
        </div>
      })
      var skills = props.data.skills.map(skills => {
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}} className={className}></span><em>{skills.name}</em></li>
      });  
    }

    return (
      <section id="resume" className="page-section">

      <div className="row education">
         <div className="three columns header-col">
            <h2><span>{props.eduTitle}</span></h2>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>
                                               
      <div className="row work">

         <div className="three columns header-col">
            <h2><span>{props.workTitle}</span></h2>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>

      <div className="row skill">

         <div className="three columns header-col">
            <h2><span>{props.skillTitle}</span></h2>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
                                               
   </section>
    );
}
export default Resume;