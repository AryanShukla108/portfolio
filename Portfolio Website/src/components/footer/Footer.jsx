import React from 'react'

import './footer.css'

import { BsFacebook } from 'react-icons/bs'

import { AiFillInstagram } from 'react-icons/ai'

import { AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="" className='footer-logo'>Aryan Shukla</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-social">
        <a href="https://facebook.com"> <BsFacebook /> </a>
        <a href="https://instagram.com"> <AiFillInstagram /> </a>
        <a href="https://twitter.com"> <AiFillTwitterCircle /> </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; Aryan Shukla. All rights reserved </small>
      </div>
    </footer>
  )
}

export default Footer