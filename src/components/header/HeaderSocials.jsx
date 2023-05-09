import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/sarang-hadagali-3567101b1/" target='_blank' rel='noreferrer'>
            <BsLinkedin color='white' size={30}/>
        </a>
        <a href="https://github.com/shadagali03" target='_blank' rel='noreferrer'>
            <BsGithub color='white' size={30}/>
        </a>

    </div>
  )
}

export default HeaderSocials