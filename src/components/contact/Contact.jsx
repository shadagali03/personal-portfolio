import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';



function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_API_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <h3 className='emails'>
        <h4>Email: <span className='emails'>sarang.hadagali@gmail.com || shadagal@stevens.edu</span></h4>
        <h4>Phone: <span className='emails'>609-516-5958</span></h4>
      </h3>
      <div className="container contact__container">
        <div className="input__fields">
          <input type="text" placeholder='Your Name*' name='name' required/>
          <input type="email" placeholder='Your Email*' name='email' required/>
          <input type="phone" placeholder='Your Phone Number' name='phone'/>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <textarea name="message" rows="7" placeholder='Your Message*' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact