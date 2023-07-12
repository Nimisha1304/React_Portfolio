import { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  };


  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Nimisha Jha <br/> Mumbai, Maharshtra<br/> India<br/><br/>
            If you have any requests or
            questions, don't hesitate to contact me using the form below or mail me at  
            <span className='mail'> jhanimisha13@gmail.com</span>
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
                  <input className='input' placeholder="Name" type="text" name="name" required /><br/><br/>
                  <input className='input' placeholder="Email" type="email" name="email" required/><br/><br/>
                  <input className='input' placeholder="Subject" type="text" name="subject" required /><br/><br/>
                  <textarea className='textarea' placeholder="Message" name="message" required ></textarea><br/><br/>
                  <input type="submit" className="flat-button" value="SEND" />
            </form>
          </div>
        </div>
        
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;

