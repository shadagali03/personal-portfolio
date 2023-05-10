import React from 'react'
import resume from '../../assets/resume-may-2023.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={resume} target="_blank" rel="noopener noreferrer" className='btn'>My Resume</a>
        <a href="#contact" className='btn'>Contact Me</a>

    </div>
  )
}

export default CTA