import './ContactForm.css'
import React, { useRef } from "react";
import emailjs from 'emailjs-com';
// require('dotenv').config()
// import { Button } from './Button.js';


const ContactForm = () => {
  const form = useRef();
  // const [toSend, setToSend] = useState({
  //   from_name: '',
  //   to_name: '',
  //   message: '',
  //   reply_to: '',
  // });

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
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  // const handleChange = (e) => {
  //   setToSend({ ...toSend, [e.target.name]: e.target.value });
  // };
  // const [status, setStatus] = useState("Submit");
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus("Sending...");
  //   const { name, email, message } = e.target.elements;
  //   let details = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   };
  //   let response = await fetch("http://localhost:5000/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(details),
  //   });
  //   setStatus("Submit");
  //   let result = await response.json();
  //   alert(result.status);
  // };
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
        {/* <Button buttonStyle='btn--outline'>Submit</Button> */}
        <input type="submit" className="btn btn-info" value="Send Message"></input>
      </div>
    </div>
  </form>
  );
};

export default ContactForm;