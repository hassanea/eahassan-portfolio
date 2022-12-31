import React from 'react';
import { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { IKImage } from 'imagekitio-react';
import { Icon } from 'react-icons-kit';  
import {eye} from 'react-icons-kit/fa/eye';
import {link} from 'react-icons-kit/fa/link';
import {github} from 'react-icons-kit/fa/github';

const Portfolio = (props) => {
    
    
const [lightBoxController, setlightBoxController] = useState({
    toggler: false,
    slide: 1
});
    
function handleLightBoxSlide(number) {
    setlightBoxController({
        toggler: !lightBoxController.toggler,
        slide: number
    });
}    
    
const urlEndpoint = "https://images.eahassan.com/";



    
    if(props.data) {
                var projects = props.data.projects.map(projects => {
        var projectImage = `tr:w-0.5,f-webp/portfolio/${projects.image}`;             
        return <div key={projects.id} className="columns portfolio-item">
           <div className="item-wrap">
                 <IKImage
                  urlEndpoint={urlEndpoint}
                  path={projectImage}
                  alt={projects.title}
                  width="500"
                  height="300"    
                  key={projects.id}
                  className="portfolio-img"
                  loading="lazy"/>              
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h3>{projects.title}</h3>
                 <button className="btn" onClick={() => handleLightBoxSlide(projects.id)} aria-label="View Project"><span className="mr"> <Icon icon={eye} size={18} focusable="false" aria-hidden="true"/>  </span>View Project</button>
                  </div>
                </div>
          </div>
        </div>
      });     
    }
        

    return (
      <section id="portfolio" className="page-section">

      <div className="row">

         <div className="twelve columns collapsed">

            <h2>Check Out Some of My Creations.</h2>

            <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-thirds clearfix">
        
                {projects} 
        
            </div>
            <div className="slideshow">
              <button className="btn" onClick={() => handleLightBoxSlide(1)} aria-label="View Portfolio Slideshow"><span className="mr">
              <svg version="1.0" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
 width="16.000000pt" height="16.000000pt" viewBox="0 0 16.000000 16.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)"
fill="#fff" stroke="none">
<path d="M20 80 l0 -60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 -60z m80 0 c0 -3
-9 -11 -20 -18 -18 -11 -20 -10 -20 18 0 28 2 29 20 18 11 -7 20 -15 20 -18z"/>
<path d="M3 80 c0 -30 2 -43 4 -28 2 16 2 40 0 55 -2 16 -4 3 -4 -27z"/>
<path d="M153 75 c0 -27 2 -38 4 -22 2 15 2 37 0 50 -2 12 -4 0 -4 -28z"/>
</g>
</svg>
             </span>View Slideshow</button>
            </div>
            <FsLightbox 
toggler={lightBoxController.toggler} 
slide={lightBoxController.slide}
sources={[          
 'https://ik.imagekit.io/twwurltqray/tr:w-original,f-webp/portfolio/kingpin-bt.jpg',
 'https://ik.imagekit.io/twwurltqray/tr:w-original,f-webp/portfolio/reroot-pontiac-gis-todos-app.jpg',
 'https://ik.imagekit.io/twwurltqray/tr:w-original,f-webp/portfolio/reroot-pontiac-gi-webite.jpg',            
 'https://ik.imagekit.io/twwurltqray/tr:w-original,f-webp/portfolio/sacred-heart-website.jpg',  
 'https://ik.imagekit.io/twwurltqray/tr:w-original,f-webp/portfolio/music-db.jpg',               
 'https://ik.imagekit.io/twwurltqray/tr:w-original,f-webp/portfolio/craigslist-redesign.jpg',              
 'https://ik.imagekit.io/twwurltqray/tr:w-original,f-webp/portfolio/edgeledger.jpg',  
 'https://ik.imagekit.io/twwurltqray/tr:w-original,f-webp/portfolio/hotel-bt.jpg',  
 'https://ik.imagekit.io/twwurltqray/tr:w-original,f-webp/portfolio/uhost.jpg',  
 'https://ik.imagekit.io/twwurltqray/tr:w-original,f-webp/portfolio/omnifood.jpg',     
 'https://ik.imagekit.io/twwurltqray/tr:w-original,f-webp/portfolio/my-reads.jpg',
 'https://ik.imagekit.io/twwurltqray/tr:w-original,f-webp/portfolio/benjamin.jpg'         
]}
initialAnimation="scale-in-long"
slideChangeAnimation="scale-in"
type="image" 
captions={[
<>
<div className="lightbox-caption">          
 <h4 className="caption-title">Kingpin Bowling Tracker</h4>
 <p className="caption-category">Category:  College - Senior Capstone Project</p>
 <p className="caption-desc">Kingpin is a bowling tracker web application utilized by management of bowling centers and leagues. Application was devloped with the Django web framework, HTML5, Bootstrap, and jQuery.</p>          
 <a href="https://kingpin-bt.com" title="Project URL" rel="noopener noreferrer" target="_blank" className="caption-link"><span> <Icon icon={link} size={32}/> </span></a> <a href="https://github.com/hassanea/KPBT" title="Source Code URL" rel="noopener noreferrer" target="_blank" className="caption-link"><span> <Icon icon={github} size={32}/> </span></a>        
</div> 
</>,
<>  
<div className="lightbox-caption">             
<h4 className="caption-title">Reroot Task Scheduler</h4>
<p className="caption-category">Category:  College - Internship project</p>
<p className="caption-desc">Reroot Task Scheduler is CRUD (create-read-update-delete) application created to manage employee and volunteer tasks at several Reroot properties. Application was made with ReactJS, ExpressJS, NodeJS, MySQL, W3.CSS, and Material-UI.        
</p>                     
<a href="https://www.reroot-task-scheduler.com" className="caption-link" title="Project URL" rel="noopener noreferrer" target="_blank"><span> <Icon icon={link} size={32}/> </span></a> <a href="https://github.com/hassanea/GIS_To_dos" className="caption-link" title="Source Code URL" rel="noopener noreferrer" target="_blank"><span> <Icon icon={github} size={32}/> </span></a>   
</div>
</>,
<>    
<div className="lightbox-caption">             
<h4 className="caption-title">Reroot Pontiac's GI Site</h4>
<p className="caption-category">Category:  College - Internship project</p>
<p className="caption-desc">Reroot Pontiac GI site is a website dedicated to green infrastructure in an urban setting. Site was created utilizing HTML5, Bootstrap, and jQuery.</p>          
<a href="http://rerootgi.com" className="caption-link" title="Project URL" rel="noopener noreferrer" target="_blank"><span> <Icon icon={link} size={32}/> </span></a> <a href="https://github.com/hassanea/Reroot_New-Website" className="caption-link" title="Source Code URL" rel="noopener noreferrer" target="_blank"><span> <Icon icon={github} size={32}/> </span></a>                
</div>
</>,          
<>
<div className="lightbox-caption">             
<h4 className="caption-title">Sacred Heart's site</h4>
<p className="caption-category">Category:  Work</p>
<p className="caption-desc">A website developed for Sacred Heart Church that provides a functional visual layout, with improved usability, and accessibility. 
The site generated with HTML5, Bootstrap, CSS3, JavaScript, and jQuery.
</p>                      
<a href="https://www.esacredheart.org" className="caption-link" title="Project URL" rel="noopener noreferrer" target="_blank"><span> <Icon icon={link} size={32}/> </span></a>         
          
          
</div>
</>,
<>
<div className="lightbox-caption">             
<h4 className="caption-title">Music DB</h4>
<p className="caption-category">Category:  College - Database Design and Implementation Project</p>
<p className="caption-desc">MusicDB is a CRUD application that enables the user to input favorite music and rate their songs and albums as well as other user's picks. It was generated with HTML5, Bootstrap, jQuery, PHP, and MySQL.</p>            
<a href="https://www.music-db.io/home.php" className="caption-link" title="Project URL" rel="noopener noreferrer" target="_blank"><span> <Icon icon={link} size={32}/> </span> </a>        
</div>
</>,           
<>
<div className="lightbox-caption">             
<h4 className="caption-title">Craigslist Redesign</h4>
<p className="caption-category">Category:  College - Human Computer Interaction (HCI) Project</p>
<p className="caption-desc">Craigslist redesign project was a proposed user interface prototype revampment. Mockup was created in Balsamiq Mockups.</p>                   
</div>
</>,                                 
<> 
<div className="lightbox-caption">          
<h4 className="caption-title">EdgeLedger Inc.</h4>      
<p className="caption-category">Category:  Udemy - Course Project</p>
<p className="caption-desc">EdgeLedger, Inc. is a fictitious financial investment firm that supplies investment banking, asset portfolios, and tax services. Website was produced with HTML5, CSS3, and JavaScript.</p>          
<a href="https://www.edgeledger.financial" className="caption-link" title="Project URL" rel="noopener noreferrer" target="_blank"><span> <Icon icon={link} size={32}/> </span> </a> 
</div>          
</>,          
<> 
<div className="lightbox-caption">          
<h4 className="caption-title">Hotel BT</h4>      
<p className="caption-category">Category:  Udemy - Course Project</p>
<p className="caption-desc">Hotel BT is a make-believe luxury hotel in downtown Boston. Website was constructed with HTML5, and CSS3.</p>          
<a href="https://www.hotel-bt.online" className="caption-link" title="Project URL" rel="noopener noreferrer" target="_blank"><span>  <Icon icon={link} size={32}/> </span> </a>
</div>          
</>,
<> 
<div className="lightbox-caption">          
<h4 className="caption-title">uHost Solutions</h4>      
<p className="caption-category">Category:  Udemy - Course Project</p>
<p className="caption-desc">uHost is an imaginary web hosting service that offers several monthly plans based on website / webapp requirements. Website was made with HTML5, CSS3, and JavaScript.</p>          
<a href="https://uhost.solutions" className="caption-link" title="Project URL" rel="noopener noreferrer" target="_blank"><span> <Icon icon={link} size={32}/> </span> </a>         
</div>          
</>,           
<> 
<div className="lightbox-caption">          
<h4 className="caption-title">Omnifood Eats</h4>      
<p className="caption-category">Category:  Udemy - Course Project</p>
<p className="caption-desc">Omnifood Eats is a fictional food delivery service website that offers healthy meals delivered to your door. Website was created utilizing HTML5, CSS3, and jQuery.</p>          
<a href="https://www.omnifood-eats.com" className="caption-link" title="Project URL" rel="noopener noreferrer" target="_blank"><span> <Icon icon={link} size={32}/> </span> </a>       
</div>          
</>, 
<>
<div className="lightbox-caption">             
<h4 className="caption-title">MyReads</h4>
<p className="caption-category">Category:  Udacity - Course Project</p>
<p className="caption-desc">MyReads is a webapp that allows a user to categorize their bookshelf. The application was created using ReactJS and CSS3.
</p>            
<a href="http://my-reads-app.s3-website-us-east-1.amazonaws.com" className="caption-link" title="Project URL" rel="noopener noreferrer" target="_blank"><span> <Icon icon={link} size={32}/> </span> </a>
<a href="https://github.com/hassanea/Reroot_New-Website" className="caption-link" title="Source Code URL" rel="noopener noreferrer" target="_blank"><span> <Icon icon={github} size={32}/> </span></a>          
</div>
</>,           
<>
<div className="lightbox-caption">             
<h4 className="caption-title">Benjamin</h4>
<p className="caption-category">Category:  College - Software Engineering Project</p>
<p className="caption-desc">Benjamin is a personal budgeting web application developed to track personal expenses. Application was made with the Django web framework, HTML5, Bootstrap, and jQuery.</p>          
<a href="https://benjamin-expense.com" className="caption-link" title="Project URL" rel="noopener noreferrer" target="_blank"><span> <Icon icon={link} size={32}/> </span> </a>
<a href="https://github.com/hassanea/benjamin-expense" className="caption-link" title="Source Code URL" rel="noopener noreferrer" target="_blank"><span> <Icon icon={github} size={32}/> </span></a>          
</div>
</>
]}
/>     
        
          </div>
      </div>
   </section>
    );
}

export default Portfolio;
