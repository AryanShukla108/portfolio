import React from 'react'

import './contact.css'

import { AiOutlineMail } from 'react-icons/ai'

import { BsMessenger } from 'react-icons/bs'

import { RiWhatsappFill } from 'react-icons/ri'



const Contact = () => {
  return (
    <section id="contact">

      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>


      <div className="container contact-container">
        <div className="contact-options">


          <article className='contact-option'>
            <AiOutlineMail className='contact-icon'/>
            <h4>Email</h4>
            <h5>aryan.shukla2015@gmail.com</h5>
            <a href="mailto:aryan.shukla2015@gmail.com">Send a Message</a>
          </article>

          <article className='contact-option'>
            <BsMessenger className='contact-icon' />
            <h4>Messenger</h4>
            <h5>....</h5>
            <a href="mailto:aryan.shukla2015@gmail.com">Send a Message</a>
          </article>


          <article className='contact-option'>
            < RiWhatsappFill className='contact-icon' />
            <h4>Whatsapp</h4>
            <h5>1234567898</h5>
            <a href="mailto:aryan.shukla2015@gmail.com">Send a Message</a>
          </article>


        </div>

        <form action="">
          <input type="text" placeholder='Your Full Nmae' required/>

          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>


      </div>

    </section>
  )
}

export default Contact