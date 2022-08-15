import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';

import './Contact.css';
import contactImg from "./img/about-9.jpeg"

const SERVICE_ID = "service_m5v03lc";
const TEMPLATE_ID = "template_d0m7yev";
const USER_ID = "user_9Jhs9O0NwxN7ji3RkOwN1";

function Contact() {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
      };
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for freelance work. Connect with me via phone:</p>
                           <p className="hire__text white"><strong>+254701587607</strong> or email <strong>ivygateri2@gmail.com</strong></p>
                        </div>
                        <div className="input__box">
                        <Form onSubmit={handleOnSubmit}>
                        <input type="text" className="contact name" placeholder="Your name *" required/>
                           <input type="text" className="contact email" placeholder="Your Email *" required/>
                           <input type="text" className="contact subject" placeholder="Write a Subject" />
        <button className="btn contact pointer" type="submit">Submit</button>
      </Form>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
       
    )
}

export default Contact