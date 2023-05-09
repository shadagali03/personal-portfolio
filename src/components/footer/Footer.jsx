import React from 'react'
import './footer.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import HeaderSocials from '../header/HeaderSocials';

function Footer() {
  return (
    <div id="footer">
      <div className="container footer__container">
          <h1>Sarang Hadagali</h1>
          <h4>Thank you for checking out my website. Feel free to reach out!</h4>
          <a href='#home' className='scroll__up'>
            <ArrowUpwardIcon fontSize='large'/>
          </a>
          <HeaderSocials />
      </div>
    </div>
  )
}

export default Footer