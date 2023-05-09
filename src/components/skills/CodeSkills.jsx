import React from 'react'
import DataArrayIcon from '@mui/icons-material/DataArray';
import './SkillsBox.css'
import '../about/about.css'
import CLOGO from '../../assets/C_Logo.png'
import PYLOGO from '../../assets/pyLogo.png'
import JLOGO from '../../assets/JaLogo.png'
import JSLOGO from '../../assets/JSLOGO.png'
import CPP from '../../assets/cpp.png'
import RUST from '../../assets/rust.png'

function CodeSkills() {
  return (
    <div id="code-skills">
      <div className="conatiner bubbles__container">
        <div className='bubble__cards'>
          <article className="bubble__card">
            <img src={PYLOGO} alt="python logo" className='bubble__icon'/>
            {/* <h2>Python</h2> */}
            <small>I have 3 years+ of experience working with python. Over the years I've used python to automate quick problems
              I have such as building a reciept calculator used to split the bill between my friends. I've also used python to build a full stack dashboard using flask and dash.
            </small>
          </article>
          <article className="bubble__card">
            <img src={JLOGO} alt='java logo' className='bubble__icon'/>
            {/* <h2>Java</h2> */}
            <small>Java was the first language I learned back in highschool. I learned OOP principles with this language. I also focused on learning Data Strucutre concepts such as building my own ArrayList and HashMap using simple arrays.</small>
          </article>
          <article className="bubble__card">
            <img src={CLOGO} alt="C-Logo" className='bubble__icon'/>
            {/* <h2>C</h2> */}
            <small>With just 1 year of experience with C, taking both systems programming and operating systems I spent a lot of time with C. Building out my own custom tree commands or building out device drivers on the kernel level I have learned to enjoy low level programming.</small>
          </article>
          <article className="bubble__card">
            <img src={JSLOGO} alt='JS Logo' className='bubble__icon'/>
            {/* <h2>Javascript</h2> */}
            <small>I have spent 2+ years messing around with javascript/HTML/CSS and building my own little websites for fun. I created my own custom worlde games and even a random restaurant generator to help me choose a restaurant when I'm feeling indecisive.</small>
          </article>
          <article className="bubble__card">
            <img src={CPP} alt='Cpp Logo' className='bubble__icon'/>
            <small>With 2 years of C++ experience, I have used this langauage stuyding various alogrithms including, graph algorithms(BFS, DFS, Topological Sort), Sorting algorithms and Network algorithms </small>
          </article>
          <article className="bubble__card">
            <img src={RUST} alt='Cpp Logo' className='bubble__icon'/>
            <small>I have only about a month of Rust experience, however, it is a language I am finding very interesting and am excited to learn it. Learning about how Rust deals with memory issues through ownership and the heavily influenced functional programming concepts has me eager to learn more.</small>
          </article> 
        </div>

      </div>
    </div>
  )
}

export default CodeSkills;