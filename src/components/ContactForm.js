import './ContactForm.css'
import React, { useRef } from "react";
import emailjs from 'emailjs-com';
import { Button } from './Button.js';


const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID, 
      process.env.REACT_APP_TEMPLATE_ID, 
      form.current, 
      process.env.REACT_APP_PUBLIC_KEY
      )
      .then((result) => {
          console.log(result.text);
          alert("Success! Your message has been sent.")
      }, (error) => {
          console.log(error.text);
          alert("Error! Message failed.", error)
      });
      e.target.reset()
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div id="fcf-form">  
        <h3 className="title">Contact Us</h3>
      <div className="fcf-form-group">
        <div className="fcf-input-group">
          <input type="text" placeholder="Your Name" id="name" name="name" required />
        </div>
      </div>

      <div className="fcf-form-group">
        <div className="fcf-input-group">
          <input type="email" placeholder="Your Email" id="email" name="email" required />
        </div>
      </div>

      <div className="fcf-form-group">
        <div className="fcf-input-group">
          <textarea id="message" placeholder="Type your message here..." name="message" required />
        </div>
      </div>

      <div className="fcf-form-group">
        <Button buttonStyle='btn--outline' type="submit" value="Send Message">Send Message</Button>
        
      </div>
    </div>
  </form>
  );
};

export default ContactForm;