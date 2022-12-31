import React from 'react';
import { Icon } from 'react-icons-kit';  
import {chevronCircleUp} from 'react-icons-kit/fa/chevronCircleUp';
import {link} from 'react-icons-kit/fa/link';
import {google} from 'react-icons-kit/fa/google';
import {linkedin} from 'react-icons-kit/fa/linkedin';
import {github} from 'react-icons-kit/fa/github';
import {gitlab} from 'react-icons-kit/fa/gitlab';
import {stackOverflow} from 'react-icons-kit/fa/stackOverflow';

const Footer = (props) => {
    
    
    return (

        
      <footer className="main-footer d-flex">
        <div className="footer-item flex-column" role="navigation">
             <ul className="social-list d-flex flex-row">
              <li><a href="mailto:ehmario@gmail.com" className="footer-nav-link" target="_blank"  rel="noopener noreferrer" aria-label="Google">
                <Icon icon={google} className="footer-icon" id="social-goo"/>
              </a></li>
              <li><a href="https://www.eahassan.com/" className="footer-nav-link" target="_blank"  rel="noopener noreferrer" aria-label="Personal Website">
                <Icon icon={link} className="footer-icon" id="social-wb"/>
              </a></li>
              <li><a href="https://www.linkedin.com/in/evan-hassan-a2bb1ba5/" className="footer-nav-link" target="_blank"  rel="noopener noreferrer" aria-label="LinkedIn">
                <Icon icon={linkedin} className="footer-icon" id="social-li"/>
             </a></li>
        
             <li><a href="https://github.com/hassanea" className="footer-nav-link" target="_blank"  rel="noopener noreferrer" aria-label="GitHub">
                <Icon icon={github} className="footer-icon" id="social-git"/>
              </a></li>
              <li><a href="https://gitlab.com/ehmario" className="footer-nav-link" target="_blank"  rel="noopener noreferrer" aria-label="GitLab">
                <Icon icon={gitlab} className="footer-icon" id="social-gitlab"/>
              </a></li>
              <li><a href="https://stackoverflow.com/users/8743212/evan-h?tab=profile" className="footer-nav-link" target="_blank"  rel="noopener noreferrer" aria-label="StackOverflow">
                <Icon icon={stackOverflow} className="footer-icon" id="social-stack"/>
              </a></li>
              </ul> 
              <p className="copyright">&copy; Copyright 2022 <a href="https://www.eahassan.com/" target="_blank"  rel="noopener noreferrer"><span className="divider-alt"></span>Evan Hassan</a></p> 
        </div>
        
                <a href="#home" id="back-to-top" className="btn-up-down" title="Back to Top" aria-label="Back to top of Page"><Icon icon={chevronCircleUp} size={54} /></a>
        
    </footer>           
        
    );
}

export default Footer;
