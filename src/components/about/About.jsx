import React from 'react'
import './about.css'
import About_pic from '../../assets/about-pic.jpg'
import spikeball from '../../assets/spikeball.png'
import pickleball from '../../assets/pickleball.jpeg'
import chess from '../../assets/chess.jpeg'

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
            <h1>About Me</h1>
            <h5>Stevens Institute of Technology, B.S in Computer Science</h5>
          </div>
          <p>
            I am an undergraduate student at Stevens Institute of Technology with plans to graduate in December 2024 with a Bachelors of Science in Computer Science.
            My interests include software development, web development, and systems programming. I am currently seeking a software engineering internship for Summer 2024.
          </p>
          <div className="about__cards">
            <img src={spikeball} alt="spikeball" className="item" />
            <img src={pickleball} alt="spikeball" className="item" />
            <img src={chess} alt="spikeball" className="item" />
          </div>
          <p>On days I am not studying or coding, I enjoy getting outside and hanging out with friends. Summer days I will most likely playing spikeball or pickleball. And when it's not so nice out I love playing chess or codenames with the family.</p>
          <div className='contact'>
            <a href='#contact' className='about-btn'>Contact Me</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About