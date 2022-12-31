import React, { useState, useEffect } from 'react';
import { Icon } from 'react-icons-kit';
import {bars} from 'react-icons-kit/fa/bars';
import {times} from 'react-icons-kit/fa/times';
import {chevronCircleDown} from 'react-icons-kit/fa/chevronCircleDown';

const Header = (props) => {
    
const [toggle, setToggle] = useState(false);  
const [navbar, setNavbar] = useState(false); 
                                                 
   const handleToggle = () => {
       setToggle(!toggle);
      }                                           
       
  
   

   useEffect(() => {
  const changeBackground = () => {
    setNavbar(window.scrollY >= 60);
  }
  window.addEventListener('scroll', changeBackground, { passive: true });

  return () => window.removeEventListener('scroll', changeBackground, { passive: true });
}, []);
   

            if(props.data){
      var description = props.data.description;   
      var navigation = props.data.navigation.map(item => {
    return <li key={item.linkname} className="nav-item"><a href={item.href} className={item.className}>{item.linkname}</a></li> 
      });    
    }
                                                      
                                            
    return (
      <header id="home" className="main-header">                                         
           <div className="container">
              <nav className={navbar ? 'navbar nav-bg' : 'navbar'} aria-label="Main Navigation" id="navbar">
           <ul className={toggle ? 'navbar-nav active' : 'navbar-nav'} id="nav">
             {navigation}
           </ul>
           <button className="btn-mobile-nav" type="button" aria-controls="nav" aria-expanded={toggle ? 'true' : 'false'} aria-label="Mobile Navigation button" title="Mobile menu button" onClick={handleToggle}>{toggle ? <Icon icon={times} size={24} title="Close Menu"/> : <Icon icon={bars} size={24} title="Open Menu"/> }</button>
      </nav>
        </div>
        <div className="header-content d-flex flex-column">
           <div>
               <h1 className="header-title"><span className="typed"></span></h1>
               <p className="header-summary">{description}</p>
           </div>
       </div>
       <a href="#about" id="to-about" className="btn-up-down" title="Go to About" aria-label="Go to About section"> <Icon icon={chevronCircleDown} size={54}/></a>
   </header>
    );
    
}

export default Header;
