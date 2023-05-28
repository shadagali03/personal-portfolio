import React from 'react'
import './experience.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import merck from '../../assets/merck.png'
import ssmif from '../../assets/ssmif.jpeg'
import tek from '../../assets/tek.png'
import ninjas from '../../assets/codeNinjas.png'

function Experience() {
  return (
    <div className="body">
    <section id="experience">
      <div className="body"></div>
      <h1 className='title'>Timeline</h1>
      <h5>Quick Summary Of My Work Experience</h5>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(251, 128, 66)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(251, 123, 38)' }}
          date="September 2023"
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
          icon={<img src={ssmif} alt='C-Logo' className='time__icon'/>}
        >
          <h3 className="vertical-timeline-element-title">Incoming Course Assistant</h3>
          <h4 className="vertical-timeline-element-subtitle">Stevens Institute of Technology</h4>
          <h5 className="vertical-timeline-element-subtitle">Hoboken, NJ</h5>
          <p>
            I will be working as a Course Assistant for the Algorithms course at Stevens.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(251, 128, 66)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(251, 123, 38)' }}
          date="May 2023 - August 2023"
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
          icon={<img src={merck} alt='C-Logo' className='time__icon'/>}
        >
          <h3 className="vertical-timeline-element-title">Incoming Software Engineering Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Merck</h4>
          <h5 className="vertical-timeline-element-subtitle">Rahway, NJ</h5>
          <p>
            I will be working on a project that will help the company with their data analytics.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(251, 128, 66)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(251, 123, 38)' }}
          date="September 2022 - Present"
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
          icon={<img src={ssmif} alt='C-Logo' className='time__icon'/>}
        >
          <h3 className="vertical-timeline-element-title">Software Developer Analyst</h3>
          <h4 className="vertical-timeline-element-subtitle">Stevens Student Managed Investement Fund</h4>
          <h5 className="vertical-timeline-element-subtitle">Hoboken, NJ</h5>
          <p>
            Used Python Flask and Dash to integrate a web application Dashboard that will display relevant risk metrics, portfolio performance, and other relevant information for the fund.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2022 - August 2022"
          contentStyle={{ background: 'rgb(251, 128, 66)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(251, 123, 38)' }}
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
          icon={<img src={tek} alt='C-Logo' className='tek__icon'/>}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Tektronix</h4>
          <h5 className="vertical-timeline-element-subtitle">Beaverton, OR</h5>
          <p>
            Worked on the Web Solutions Team to expand on existing web components. I monitored LCP and CLS scores to ensure that the website was optimized for SEO.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="February 2021 - June 2021"
          contentStyle={{ background: 'rgb(251, 128, 66)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(251, 123, 38)' }}
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
          icon={<img src={ninjas} alt='C-Logo' className='tek__icon'/>}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Code Sensei</h3>
          <h4 className="vertical-timeline-element-subtitle">Code Ninjas</h4>
          <h5 className="vertical-timeline-element-subtitle">West Windsor, NJ</h5>
          <p>
            Worked as a coding instructor that taught kids aged 5-13 on how to code in Python and Javascript.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
    </div>
  )
}

export default Experience