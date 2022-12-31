import React, {useState} from 'react'

import './nav.css'

import { AiFillHome } from 'react-icons/ai'

import { AiOutlineUserAdd } from 'react-icons/ai'

import { BiBook } from 'react-icons/bi'

import { RiServiceLine } from 'react-icons/ri'

import { IoIosContact } from 'react-icons/io'




const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')
  return (

    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}> <AiFillHome/> </a>

      <a href="#about"> <AiOutlineUserAdd /> </a>

      <a href="#experience"> <BiBook /> </a>

      <a href="#services"> <RiServiceLine /> </a>

      <a href="#contact"> <IoIosContact /> </a>
    </nav>
  )
}

export default Nav;