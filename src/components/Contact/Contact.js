import React, { useState } from "react";
import "./Contact.css";



const ContactForm = () => {
    
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleCancel = () => {
    setName('');
    setEmail('');
    setMessage('');
  };


  const handleSend = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
  
      if (response.ok) {
        console.log('Form submitted successfully');
        // Clear form fields or show success message
      } else {
        console.error('Form submission failed');
        // Handle errors or show error message
      }
    } catch (error) {
      console.error('There was an error submitting the form', error);
    }
  };
  

  return (
    <div id= "Contact">
    <div className="background">
      <div className="contactContainer">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>Let's talk </span>
                <span>about your project.</span>
              </div>
              <div className="app-contact">CALL:917-860-5570 </div>
            </div>
            <div className="screen-body-item">
              <div className="app-form">
                <div className="app-form-group">
                  <input className="app-form-control" placeholder="NAME" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="app-form-group">
                  <input className="app-form-control" placeholder="EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="app-form-group message">
                  <input className="app-form-control" placeholder="MESSAGE" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <div className="app-form-group buttons">
                  <button className="app-form-button" onClick={handleCancel}>CANCEL</button>
                  <button className="app-form-button" onClick={handleSend}>SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
  ;
};

export default ContactForm;
