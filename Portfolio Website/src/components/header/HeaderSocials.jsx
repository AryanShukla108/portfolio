import React from 'react'

import { AiFillGithub } from 'react-icons/ai'

import { SiVercel } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='header-socials'>
            <a href="https://github.com/AryanShukla108" target="_blank">  <AiFillGithub/>   </a>

            <a href="https://vercel.com/dashboard" target="_blank">  <SiVercel/>    </a>
        </div>
    )
}

export default HeaderSocials