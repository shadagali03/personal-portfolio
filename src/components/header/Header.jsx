import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Profile from '../../assets/profile-pic.jpg'

function Header() {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>
          Hello I'm
        </h5>
        <h1>Sarang Hadagali</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="profile">
          <img src={Profile} alt="">
          </img>
        </div>
        <a href="#contact" className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header