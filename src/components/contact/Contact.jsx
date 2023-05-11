import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';

function Contact() {
  const form = useRef();
  const [open, setOpen] = React.useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setOpen(true);

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
      <h1>Contact Me</h1>
      <h3 className='emails'>
        <h4>Email: <span className='emails'>sarang.hadagali@gmail.com || shadagal@stevens.edu</span></h4>
        <h4>Phone: <span className='emails'>609-516-5958</span></h4>
      </h3>
      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail}>
        <div className="input__fields">
          <input type="text" placeholder='Your Name*' name='name' required/>
          <input type="email" placeholder='Your Email*' name='email' required/>
          <input type="phone" placeholder='Your Phone Number' name='phone'/>
        </div>
          <div>
            <textarea name="message" rows="7" placeholder='Your Message*' required></textarea>
            <button type='submit' className='btn btn-primary'>Send</button>
          </div>
        </form>
      </div>
      <div className="alert-contatiner">
        <Collapse in={open} className='alert'>
          <Alert
            variant="filled" severity="success"
            action={
              <IconButton
                aria-label="close"
                // color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
            >
              Message Sent! I will get back to you as soon as possible.
          </Alert>
        </Collapse>
      </div>
      
    </section>
  )
}

export default Contact