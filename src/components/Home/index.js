import React, { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/profile_photo1.png'
import Logo from './Logo'
import './index.scss'
import Loader from 'react-loaders';

const Home = () => {
   const [nameLetterClass, setNameLetterClass] = useState('text-animate');
   const [jobLetterClass, setJobLetterClass] = useState('text-animate');
   const nameArray = ['i', 'm', 'i', 's', 'h','a']
   const jobArray =['w', 'e', 'b',' ','d','e','v','e','l','o','p','e','r']

   useEffect(() => {
    const nameTimeout = setTimeout(() => {
        setNameLetterClass('text-animate-hover');
      }, 3000);

    const jobTimeout = setTimeout(() => {
        setJobLetterClass('text-animate-hover');
      }, 4000);

      return () => {
        clearTimeout(nameTimeout);
        clearTimeout(jobTimeout);
      };
  }, [])

   return(
    <>
    <div className="container home-page">
        <div className="text-zone">
            <h1>
            <span className={nameLetterClass}>H</span>
            <span className={`${nameLetterClass} _12`}>i,</span>
            <br/> 
            <span className={`${nameLetterClass} _13`}>I</span>
            <span className={`${nameLetterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer"/>
            
            {nameArray.map((letter, index) => (
            <span key={index} className={`${nameLetterClass} _${15 + index}`}>
              {letter}
            </span>
          ))}
          <br />
          {jobArray.map((letter, index) => (
            <span key={index} className={`${jobLetterClass} _${22 + index}`}>
              {letter}
            </span>
          ))}
            </h1>
            <h2>MERN Stack Developer</h2>
            
            <a href="/contact" className='flat-button'>CONTACT ME</a>
        </div>
        <Logo/>
    </div>
    <Loader type="pacman"/>
    </>
   )

  

  
}

export default Home