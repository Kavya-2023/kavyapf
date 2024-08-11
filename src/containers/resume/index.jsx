import React from 'react'
import {FaFileAlt} from 'react-icons/fa';
import PageHeader from '../../components/pageheader';
import './index.scss';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { resumeData } from '../../helper/utils';
import {MdWork} from 'react-icons/md'
const Resume = () => {
  return (
    <section id="resume" className='resume'>
    <PageHeader 
    headerText="Experience"
    icon={<FaFileAlt size={40}/>}
    />

    <div className='timeline'>
      <div className='timeline__experience'>
        <h3 className='timeline__experience__header-text'>EXPERIENCE</h3>
        <VerticalTimeline
        layout={'1-column'}
        lineColor='var(--yellow-theme-main-color)'
        >
          {
            resumeData.experience.map((item,i)=>(
              <VerticalTimelineElement
              contentStyle={{
                background:'none',
                color:'#fff',
                border:'1.5px solid var(--yellow-theme-main-color)',
                boxShadow:'none'

              }}
              icon={<MdWork/>}
              iconStyle={{
                background:'#181818',
                color:'var(--yellow-theme-main-color)',
                
              }}
              key={i}
              className='timeline__experience__vertical-timeline-element'
              >
                <div className='vertical-timeline-element-title-wrapper'>
                  <h3 >
                    {item.title}
                  </h3>
                  <h4 >
                    {item.subTitle}
                  </h4>
                  <p>{item.desc}</p>
                  <p className='dur'>{item.duration}</p>
                </div>
              </VerticalTimelineElement>
            ))
          }

        </VerticalTimeline>
      </div>
      <div className='timeline__education'>
        <h3 className='timeline__education__header-text'>EDUCATION</h3>
        <VerticalTimeline
        layout={'1-column'}
        lineColor='var(--yellow-theme-main-color)'
        >
          {
            resumeData.education.map((item,i)=>(
              <VerticalTimelineElement
              contentStyle={{
                background:'none',
                color:'#fff',
                border:'1.5px solid var(--yellow-theme-main-color)',
                boxShadow:'none'
              }}
              
              icon={<MdWork/>}
              iconStyle={{
                background:'#181818',
                color:'var(--yellow-theme-main-color)',

              }}
              key={i}
              className='timeline__experience__vertical-timeline-element'
              >
                <div className='vertical-timeline-element-title-wrapper'>
                  <h3 className='vertical-timeline-element-title'>
                    {item.title}
                  </h3>
                  <h4 className='vertical-timeline-element-subtitle'>
                    {item.subTitle}
                  </h4>
                  <p>{item.desc}</p>
                  <p className='dur'>{item.duration}</p>
                </div>
              </VerticalTimelineElement>
            ))
          }

        </VerticalTimeline>
      </div>
    </div>
  </section>
  )
}

export default Resume
