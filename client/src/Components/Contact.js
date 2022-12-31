import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const Contact = (props) => {
          

    if(props.data) {
      var name = props.data.name;
      var cellphone= props.data.cellphone;   
      var email = props.data.email;
      var mailToEmail = props.data.mailTo;
      var cellphoneTo = props.data.telephoneTo;     
      var message = props.data.contactmessage;  

    }
    
    if(props.recommendData) {
        var recommendations = props.recommendData.endorsements.map(item => {
        var recommendMessage = `Check out ${item.name} here!`;    
       return <li key={item.id}>
            <div>{item.name}</div>
            <a href={item.url} title={item.name} rel="noopener noreferrer" target="_blank" className="widget-link">{recommendMessage}</a>
        </li> 
        });
    }
      
      
    return (
      <section id="contact" className="page-section">

         <div className="row section-head">

            <div className="two columns header-col">
               <h2>Get In Touch.</h2>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">
               <form onSubmit={props.EmailSend}>
					<fieldset>
                        <legend>Contact Info:</legend>
                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" size="35" id="contactName" name="recipName" onChange={props.change} value={props.recipName} placeholder="Enter your Name" aria-label="Name"/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="email" size="35" id="contactEmail" name="recipEmail" onChange={props.change} value={props.recipEmail} placeholder="Enter your E-Mail" aria-label="E-Mail"/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject <span className="required">*</span></label>
						   <input type="text" size="35" id="contactSubject" name="recipSubject" onChange={props.change} value={props.recipSubject} placeholder="Enter the Subject" aria-label="Subject"/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="recipMessage" placeholder="Enter your Message" aria-label="Message" onChange={props.change} value={props.recipMessage}></textarea>
                  </div>
        
                  <div>
                 
                  <div>
                   <ReCAPTCHA
                    sitekey="6Ld-q8oZAAAAAKJGzR4rJKvCYkF3S9g-t1VYuA1p"
                    className="captcha"
                    onChange={props.captchaChange}
                    theme="dark" />
                   <p></p>
                  </div>
        
                     <button type="submit" className="submit" title="Submit" aria-label="Send E-Mail">
                    Send!</button>
                  </div>
					</fieldset>
				   </form>

           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h3>Reach Me</h3>
					   <p className="address">
						   {name}<br />
                           <a href={mailToEmail} aria-label="E-Mail">{email}</a><br />
						   <span><a href={cellphoneTo} aria-label="Cellphone">{cellphone}</a></span><br />
					   </p>
				   </div>

               <div className="widget widget_tweets">
                  <h3 className="widget-title">Recommended sites & endorsements</h3>
                  <ul id="recommend">
                    {recommendations}
                  </ul>
		         </div>
            </aside>
      </div>
   </section>
    );
}

export default Contact;
