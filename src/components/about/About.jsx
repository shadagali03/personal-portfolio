import React from 'react'
import './about.css'
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import About_pic from '../../assets/about-pic.jpg'

function About() {
  return (
    <div id='about'>
      <div className='container about__container'>
        <div className="about__me">
            <img src={About_pic} alt="linkedin" className="about__me-image">
            </img>
        </div>
        <div className="about__content">
          <div className='title'>
            <h2>About Me</h2>
            <h5>Stevens Institute of Technology, B.S in Computer Science, Student, Software Engineer</h5>
          </div>
          <div className="about__cards">
            <article className="about__card">
              <AccountBalanceOutlinedIcon className='about__icon'/>
              <h5>Experience</h5>
              <small>Enter some text</small>
            </article>
            <article className="about__card">
              <AccountBalanceOutlinedIcon className='about__icon'/>
              <h5>Experience</h5>
              <small>Enter some text</small>
            </article>
            <article className="about__card">
              <AccountBalanceOutlinedIcon className='about__icon'/>
              <h5>Experience</h5>
              <small>Enter some text</small>
            </article>
          </div>
          <p>
            I am an undergraduate student at Stevens Institute of Technology with plans to graduate in December 2024 with a Bachelors of Science in Computer Science.
            My interests include software development, web development, and systems programming. I am currently seeking a software engineering internship for Summer 2024.
          </p>
          <div className='contact'>
            <a href='#contact' className='about-btn'>Contact Me</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About