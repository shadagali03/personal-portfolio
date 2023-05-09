import React from 'react'
import './projects.css'
import friendle from '../../assets/friendle.png'
import maw from '../../assets/MAW2.png'
import split from '../../assets/SplitIt1.png'
import cpu from '../../assets/CPU2.png'

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <h5>Check Out What I've Worked On</h5>
      <div className="container portfolio__container">
        <div className="items">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={maw} alt="" />
          </div>
            <h3>Make-A-Wish Dashboard</h3>
              <a href="https://github.com/leemabhena/code-to-give" target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={split} alt="" />
          </div>
            <h3>SplitIt</h3>
              <a href="https://github.com/shadagali03/Split_It" target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={friendle} alt="" />
          </div>
            <h3>Friendle</h3>
              <a href="https://github.com/shadagali03/Friendle2" target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={cpu} alt="" />
          </div>
            <h3>CPU and Assembler Design</h3>
              <a href="https://github.com/shadagali03/CPU-and-Assembler-Design/tree/main" target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
        </article>

        </div>
      </div>
    </section>
  )
}

export default Projects