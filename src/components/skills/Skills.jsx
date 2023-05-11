import React from 'react'
import './skills.css'
import CodeSkills from './CodeSkills';
import vscodeLogo from '../../assets/vscode.png'
import gitLogo from '../../assets/git.png'
import linuxLogo from '../../assets/linux.png'
import awsLogo from '../../assets/aws.png'
import reactLogo from '../../assets/react.png'
import dashLogo from '../../assets/dash.png'
import pandasLogo from '../../assets/pandas.png'
import firebaseLogo from '../../assets/firebase.png'
function Skills() {
  return (
    <section id="skills">
      <h1>Skills</h1>
      <h5>Some of the language/framworks I've used over the years</h5>
      <div className="container framework__container">
        <div className="tools">
          <h3>Tools</h3>
          <div className="tools__content">
            <article className='tools__card'>
              <img src={vscodeLogo} alt='vscode logo' className='skill_icon'/>
              <div>
                <h4>Vscode</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='tools__card'>
              <img src={linuxLogo} alt='linux logo' className='skill_icon'/>
              <div>
                <h4>Linux</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='tools__card'>
              <img src={gitLogo} alt='git logo' className='skill_icon'/>
              <div>
                <h4>Git/Github</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='tools__card'>
              <img src={awsLogo} alt='aws logo' className='skill_icon'/>
              <div>
                <h4>AWS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="libraries">
          <h3>Libraries</h3>
          <div className="tools__content">
            <article className='tools__card'>
              <img src={reactLogo} alt='react logo' className='skill_icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='tools__card'>
              <img src={pandasLogo} alt='pandas logo' className='skill_icon'/>
              <div>
                <h4>Pandas</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='tools__card'>
              <img src={dashLogo} alt='dash logo' className='skill_icon'/>
              <div>
                <h4>Dash</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='tools__card'>
              <img src={firebaseLogo} alt='dash logo' className='skill_icon'/>
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
      <CodeSkills />
    </section>
  )
}

export default Skills