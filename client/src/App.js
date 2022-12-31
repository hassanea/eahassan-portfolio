import React from 'react';
import './default.min.css';
import './app.min.css';
import SkipNav from './Components/SkipNav';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';



class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {   
      resumeData: [],
      recipName: '',
      recipEmail: '',
      recipSubject: '',
      recipMessage: ''    
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCaptchaChange = this.handleCaptchaChange.bind(this);
    this.handleEmailSent = this.handleEmailSent.bind(this);  
  }

  getResumeData = () => {
    try {
   fetch('/data.json')
   .then(response => {
    return response.json()
   })
   .then(data => {
     this.setState({
       resumeData: data
     });
   })
   .catch(error => {
     console.log(error)  
     alert(`Unable to retrieve data! See JS console for details. Error:${error}`)
   })
  }
  catch(error) {
    console.error(error);
  }
   }
  
  handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    }
  
  handleCaptchaChange = (value) => {
  console.log("Captcha value:", value);
}
  
  handleEmailSent = (event) => {
    
        event.preventDefault();
        if (this.state.recipName === '' || this.state.recipEmail === '' || this.state.recipSubject === '' || this.state.recipMessage === '') {
          console.log('All fields required!')
          alert('All fields are required!');
          return;
      }
    else {
     const data = {
      recipName: this.state.recipName,
      recipEmail: this.state.recipEmail,
      recipSubject: this.state.recipSubject,     
      recipMessage: this.state.recipMessage
    };
    console.log(data);
    
    
        fetch (process.env.REACT_APP_API_ENDPOINT, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then((response) => {
        console.log(response.data);
        alert("E-Mail sent successfully!");
        window.location.reload();    
    })
    .catch((error) => console.log("E-Mail Failure - Error:", error));  
  }
  }

  componentDidMount () {
    this.getResumeData(); 
  }

    
  render() {
      
    return (
       <div className="App">
         <SkipNav title="Skip to main content"/>
         <Header data={this.state.resumeData.main}/>
           <main id="mainContent">
              <About data={this.state.resumeData.main} title="About Me"/>
              <Resume data={this.state.resumeData.resume} eduTitle="Education" workTitle="Work" skillTitle="Skills"/>
              <Portfolio data={this.state.resumeData.portfolio}/>
              <Contact data={this.state.resumeData.main} recommendData={this.state.resumeData.recommendations} captchaChange={this.handleCaptchaChange} recipName={this.state.recipName} recipEmail={this.state.recipEmail} recipSubject={this.state.recipSubject} recipMessage={this.state.recipMessage} EmailSend={this.handleEmailSent} change={this.handleChange}/>
           </main>
         <Footer data={this.state.resumeData.main}/> 
      </div> 
        
    );
  }
}

export default App;