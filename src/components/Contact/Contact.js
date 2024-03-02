import React, { useState } from "react";
import "./Contact.css";



const ContactForm = () => {
    
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [contactNo, setContactNo] = useState("");
  const [message, setMessage] = useState("");

  const handleCancel = () => {
    // Logic for Cancel button (e.g., clear form)
    setName('');
    setEmail('');
    // setContactNo('');
    setMessage('');
  };

  const handleSend = (event) => {
    event.preventDefault();
    // Logic for Send button (e.g., form submission)
    console.log({ name, email, message });
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
                <span>CONTACT</span>
                <span>ADONIS</span>
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
                {/* <div className="app-form-group">
                  <input className="app-form-control" placeholder="CONTACT NO" value={contactNo} onChange={(e) => setContactNo(e.target.value)} />
                </div> */}
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
  );
};

export default ContactForm;
