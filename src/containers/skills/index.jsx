import React from 'react'
import './index.scss';
import {FaLightbulb} from 'react-icons/fa';
import PageHeader from '../../components/pageheader';
import { skillData } from '../../helper/utils';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { Line } from 'rc-progress';
const Skills = () => {
  return (
    <section id="skills" className='skills'>
      <PageHeader 
      headerText="My Skills"
      icon={<FaLightbulb size={40}/>}
      />

      <div className="skills__content_wrapper">
        {
          skillData.map((item,i)=>(
            <div key={i} className='skills__content-wrapper__inner-content'>
              <Animate
              play
              duration={1}
              deplay={0.3}
              start={{
                transform:'translateX(-200px)'
              }}

              ens={{
                transform:'translateX(0px)'
              }}
              >
                <h3 className='skills__content-wrapper__inner-content__category-text'>{item.label}</h3>
                <div>
                  {
                    item.data.map((skillitem,ind)=>(
                      <AnimateKeyframes
                        play
                        duration={1}
                        keyframes={["opacity:1","opacity:0"]}
                        iterationCount="1"
                      >
                        <div className='progressbar__wrapper' key={ind}>
                          <p>{skillitem.skillName}</p>
                          <Line 
                          percent={skillitem.percentage}
                          strokeColor="var(--yellow-theme-main-color)"
                          strokeWidth="3"
                          trailWidth="3"
                          strokeLinecap="square"
                          style={{ width: '100%' }}
                          />
                        </div>
                      </AnimateKeyframes>
                    ))
                  }
                </div>
              </Animate>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills
