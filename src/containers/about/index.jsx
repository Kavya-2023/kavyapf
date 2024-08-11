import React from 'react'
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeader from '../../components/pageheader';
import { Animate } from 'react-simple-animate';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';
import './index.scss';
const personalDetails=[
  {
    label:"Name",
    value:"Kavya Varanasi"
  },
  {
    label:"Email",
    value:"varanasikavya0@gmail.com"
  },
  {
    label:"Contact No",
    value:"+91 6300106993"
  },
  {
    label:"LinkedIn",
    value:"https://www.linkedin.com/in/varanasi-kavya"
  }
]
const summary="Aspiring Software Engineer with strong expertise in the MERN stack and experience in full-stack development, particularly in creating dynamic web applications. Proficient in front-end and back-end technologies, with hands-on experience from internships and projects like NanoQuest. A dedicated team player with excellent problem-solving skills and a passion for continuous learning";
const About = () => {
  return (
    <section id="about" className='about'>
      <PageHeader 
      headerText="About Me"
      icon={<BsInfoCircleFill size={40}/>}
      />
      <div className='about__content'>
        <div className='about__content__personal_wrapper'>
        <Animate play
      duration={1.5}
      deplay={1}
      start={{
        transform:'translateX(-900px)'
      }}
      end={{
        transform:'translateX(0px)'
      }}
    >
        <h3>Full Stack Developer</h3>
        <p>{summary}</p>
      </Animate>

      <Animate play
      duration={1.5}
      deplay={1}
      start={{
        transform:'translateX(500px)'
      }}
      end={{
        transform:'translateX(0px)'
      }}
    >
      <h3 className='personalInfoHeaderText'>Personal Information</h3>
      <ul>
        {
          personalDetails.map((item,index)=>(
            <li key={index}>
              <span className='title'>{item.label}</span>
              <span className='value'>{item.value}</span>
            </li>
          ))
        }
      </ul>
      </Animate>
        </div>
        <div className='about__content__services_wrapper'>
        <Animate play
      duration={1.5}
      deplay={1}
      start={{
        transform:'translateX(600px)'
      }}
      end={{
        transform:'translateX(0px)'
      }}
    >
      <div className='about__content__services_wrapper__innercontent'>
  <div>
    <SiMongodb size={60} color="var(--yellow-theme-main-color)" />
  </div>
  <div>
    <SiExpress size={60} color="var(--yellow-theme-main-color)" />
  </div>
  <div>
    <SiReact size={60} color="var(--yellow-theme-main-color)" />
  </div>
  <div>
    <SiNodedotjs size={60} color="var(--yellow-theme-main-color)" />
  </div>
</div>
      </Animate>
          
           
        </div>
      </div>

    </section>
  )
}

export default About
