import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Profile from '../../assets/profile-pic.jpg'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Typewriter from "typewriter-effect";


function Header() {
  return (
    <header id="home" className='home__background'>
      <div className="container header__container">
        <h5>
          Hello I'm
        </h5>
        <h1>Sarang Hadagali</h1>
        <Typewriter
          options={{
            strings: ['Software Developer', 'Student', ],
            autoStart: true,
            loop: true,
          }}
        />
        <CTA />
        <HeaderSocials />
        <div className="profile">
          <img src={Profile} alt="" className='image' />
        </div>
        <a href="#contact" className='scroll__down'>
          <ArrowDownwardIcon fontSize='large' className='scroll__down__icon'/>
        </a>

      </div>
    </header>
  )
}

export default Header