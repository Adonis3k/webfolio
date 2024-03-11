import React, { useState } from "react";
import { useForm } from '@formspree/react';
import "./Contact.css";



const ContactForm = () => {
  // Initialize useForm
  const [state, handleSubmit] = useForm("https://formspree.io/f/mwkgqoyp"); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleCancel = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  if (state.succeeded) {
  
return <div>Thank you for signing up!</div>;
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
            <form onSubmit={handleSubmit}>
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
                <button type="button" className="app-form-button" onClick={handleCancel}>CANCEL</button>
                      <button type="submit" className="app-form-button">SEND</button> </div>
                      </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  );
};

export default ContactForm;
