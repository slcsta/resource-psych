import React, { useState } from "react";
import { Button } from './Button.js';
import './ContactForm.css'


const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div id="fcf-form">  
        <h2 className="title">Contact Us</h2>
      <div class="fcf-form-group">
        <label htmlFor="name" class="fcf-label">Name:</label>
        <div class="fcf-input-group">
          <input type="text" placeholder="Your Name" id="name" required />
        </div>
      </div>

      <div class="fcf-form-group">
        <label htmlFor="email" class="fcf-label">Email:</label>
        <div class="fcf-input-group">
          <input type="email" placeholder="Your Email" id="email" required />
        </div>
      </div>

      <div class="fcf-form-group">
        <label htmlFor="message" class="fcf-label">Message:</label>
        <div class="fcf-input-group">
          <textarea id="message" placeholder="Your Message" required />
        </div>
      </div>

      <div class="fcf-form-group">
        <Button buttonStyle='btn--outline'>Submit</Button>
      {/* <button type="submit">{status}</button> */}
      </div>
      
      </div>
    </form>
  );
};

export default ContactForm;