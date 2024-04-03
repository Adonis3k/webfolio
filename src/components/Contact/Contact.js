import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./Contact.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("mwkgqoyp");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleCancel = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  if (state.succeeded) {
    return <div className='thanks'><h1>Thanks for the note!</h1></div>;
  }

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
                CONTACT ME
              </div>
              <div className="app-contact">C: 917-860-5570 </div>
            </div>
            <div className="screen-body-item">
          
            <form onSubmit={handleSubmit}>
              <div className="app-form">
                <div className="app-form-group">
                  <input id="name" type="name" name="name" className="app-form-control" placeholder="NAME" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="app-form-group">
                  <input id="email" type="email" name="email" className="app-form-control" placeholder="EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div className="app-form-group">
                  <textarea id="message" name="message" className="app-form-control" placeholder="MESSAGE" value={message} onChange={(e) => setMessage(e.target.value)} />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <div className="app-form-group buttons">
                <button type="button" className="app-form-button" onClick={handleCancel}>RESET</button>
                      <button type="submit" className="app-form-button-send">SEND</button> </div>
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
