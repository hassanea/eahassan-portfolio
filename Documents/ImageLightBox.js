import React, { Component } from 'react'; 
import FsLightbox from 'fslightbox-react';



class ImageLightBox extends Component {

    
      constructor(props){
    super(props);
    this.state = {
        toggle: false,
        slide: 0,
    };
    }
    
    
handleToggle = () => {
    const { toggle } = this.state;
    this.setState({
       toggle: !toggle
    });
}

OpenlightboxOnSlide = (number) => {
    const { toggle } = this.state;
    this.setState({
       toggle: !toggle,
        slide: number
    });
}


    

  render() {
      
      const projectTxt = ' URL';
      
    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
               <img alt={projects.title} src={projectImage} key={projects.id}/>
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                        <a href={projects.url} title={projects.title} target="">{projects.title}{projectTxt}</a>
                     <p>{projects.category}</p>
                  </div>
                </div>
          </div>
        </div>
      })
    }
      
      
      
          const mr = {
      marginRight: '8px'  
    };
      
  return (
    <div>
            
      
         
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
                <button onClick={this.handleToggle}></button>
      {
//                <button onClick={() => this.OpenlightboxOnSlide(2)}>Open Slide 1</button>
      }
                <FsLightbox 
toggler={this.state.toggle}
slide={this.state.slide}      
sources={[ 
'../images/portfolio/Udemy-Omnifood-Proj.jpg',
'../images/portfolio/Udemy-Omnifood-Proj.jpg'
]}
customToolbarButtons={[ 
{ 
viewBox: '0 0 96.124 96.123', 
d: 'M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803 c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654 c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246 c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z',
width: '17px', 
height: '17px', 
title: 'Facebook', 
onClick: () => console.log('Facebook button clicked!') 
} 
]} 
initialAnimation="scale-in-long"
slideChangeAnimation="scale-in"
type="image"     
types={[null, null, 'video']} 
captions={[ 
<> 
<h2>Neighborhood Map</h2>      
<div><p>Category:  Udacity Nanodegree program project</p> <br/> <a href="http://neighbor-map.s3-website-us-east-1.amazonaws.com" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link fa-2x" style={mr}></i> </span> Project URL </a></div> 
</>, 
<>          
<h2>Reroot Task Scheduler</h2>
<div><p>Category:  College Internship project</p> <br/> <a href="http://gis-todos.s3-website.us-east-2.amazonaws.com" rel="noopener noreferrer" target="_blank"><span> <i className="fa fa-link fa-2x" style={mr}></i> </span> Project URL </a></div>
</>
]}
/> 
      
            </div>
          </div>
      </div>
   </section>      
    </div>
  );
 }
}

export default ImageLightBox;
