import React from 'react'
import DataArrayIcon from '@mui/icons-material/DataArray';
import './skills.css'
import CodeSkills from './CodeSkills';

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <h5>Some of the language/framworks I've used over the years</h5>
      <div className="container framework__container">
        <div className="tools">
          <h3>Tools</h3>
          <div className="tools__content">
            <article className='tools__card'>
              <DataArrayIcon />
              <div>
                <h4>Vscode</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='tools__card'>
              <DataArrayIcon />
              <div>
                <h4>Linux</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='tools__card'>
              <DataArrayIcon />
              <div>
                <h4>Github</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='tools__card'>
              <DataArrayIcon />
              <div>
                <h4>Github</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="libraries">
          <h3>Libraries</h3>
          <div className="tools__content">
            <article className='tools__card'>
              <DataArrayIcon />
              <div>
                <h4>Vscode</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='tools__card'>
              <DataArrayIcon />
              <div>
                <h4>Linux</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='tools__card'>
              <DataArrayIcon />
              <div>
                <h4>Github</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='tools__card'>
              <DataArrayIcon />
              <div>
                <h4>Github</h4>
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