import { useEffect, useState } from 'react'
import {
  faNodeJs,
  faCss3,
  faJs,
  faHtml5,
  faReact,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'


const About = () => {
    const [nameLetterClass, setNameLetterClass] = useState('text-animate');
    const nameArray = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']

    useEffect(() => {
        const nameTimeout = setTimeout(() => {
            setNameLetterClass('text-animate-hover');
          }, 3000);
  }, [])


  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>

          {nameArray.map((letter, index) => (
            <span key={index} className={`${nameLetterClass} _${15 + index}`}>
              {letter}
            </span>
          ))}
          </h1>
          <p>
            I'm a very ambitious MERN Stack developer currently a 3rd year Computer Science Student, looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a result driven person, quick learner with strong interpersonal skills and 
            a strategic thinker with a keen eye for detail.
          </p>
          <p>
          <span className='Education'>Education Details</span>
          
            <p className='heading'>Bachelor of Technology (B.tech), Computer Science</p>
            <span className='innertext'>
              G H Raisoni College of Engineering, Nagpur <br/>
              CGPA : 9.19
            </span>
            <p className='heading'>Senior Secondary (XII), Science</p>
            <span className='innertext'>
              Royal College of Science, Commerce & Arts, Mumbai<br/>
              Percentage : 85.15%
            </span>
            <p className='heading'>Secondary (X) </p>
            <span className='innertext'>
              Sardar Vallabhbhai Patel Vidyalaya, Mumbai<br/>
              Percentage : 90%
            </span> 
            </p>
        </div>

        <div className="stage-cube-cont">

            <div id="stars">
                
            </div>
            <div id="stars2">
                
            </div>
            <div id="stars3">
                
            </div>
            
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#5cdd00" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJs} color="#efd81d" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faPython} color="#3f28ec" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About