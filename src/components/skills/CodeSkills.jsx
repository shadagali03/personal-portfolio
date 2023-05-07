import React from 'react'
import DataArrayIcon from '@mui/icons-material/DataArray';
import './SkillsBox.css'
import '../about/about.css'
import {TbBrandPython} from 'react-icons/tb'
import {DiJava} from 'react-icons/di'

function CodeSkills() {
  return (
    <div id="code-skills">
      <div className="conatiner bubbles__container">
        <div className='bubble__cards'>
          <article className="bubble__card">
            <TbBrandPython className='bubble__icon'/>
            <h2>Python</h2>
            <small>I have 3 years+ of experience working with python. Over the years I've used python to automate quick problems
              I have such as building a reciept calculator used to split the bill between my friends. I've also used python to build a full stack dashboard using flask and dash.
            </small>
          </article>
          <article className="bubble__card">
            <DiJava className='bubble__icon'/>
            <h2>Java</h2>
            <small>Java was the first language I learned back in highschool. I learned OOP principles with this language.</small>
          </article>
          <article className="bubble__card">
            <DataArrayIcon className='bubble__icon'/>
            <h2>C</h2>
            <small>With just 1 year of experience with C, taking both systems programming and operating systems I spent a lot of time with C. Building out my own custom tree commands or building out device drivers on the kernel level I have learned to enjoy low level programming.</small>
          </article>
          <article className="bubble__card">
            <DataArrayIcon className='bubble__icon'/>
            <h5>Experience</h5>
            <small>Enter some text</small>
          </article>
          <article className="bubble__card">
            <DataArrayIcon className='bubble__icon'/>
            <h5>Experience</h5>
            <small>Enter some text</small>
          </article>
          <article className="bubble__card">
            <DataArrayIcon className='bubble__icon'/>
            <h5>Experience</h5>
            <small>Enter some text</small>
          </article> 
          <article className="bubble__card">
            <DataArrayIcon className='bubble__icon'/>
            <h5>Experience</h5>
            <small>Enter some text</small>
          </article>
          <article className="bubble__card">
            <DataArrayIcon className='bubble__icon'/>
            <h5>Experience</h5>
            <small>Enter some text</small>
          </article>
          <article className="bubble__card">
            <DataArrayIcon className='bubble__icon'/>
            <h5>Experience</h5>
            <small>Enter some text</small>
          </article>
        </div>

      </div>
    </div>
  )
}

export default CodeSkills;