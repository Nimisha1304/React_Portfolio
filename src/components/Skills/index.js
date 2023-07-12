import { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import TagCloud from 'TagCloud';


const Skills = () => {
  const [nameLetterClass, setNameLetterClass] = useState('text-animate')
  const nameArray = ['S', 'k', 'i', 'l', 'l', 's']
  const tagCloudRef = useRef(null)

  useEffect(() => {
    const myTags = [
      'JavaScript', 'CSS', 'HTML',
      'MongoDB', 'C++', 'React',
      'Python', 'Git', 'MySQL',
      'Express', 'Node', 'npm','NoSQL',
      'OOPs', 'DSA', 'Bootstrap',
      'Salesforce', 'DAA', 'Figma',
    ]

    // Initialize the tag cloud
    const tagCloud = new TagCloud(tagCloudRef.current, myTags, {
      radius: 230,
      maxSpeed: 'very fast',
      initSpeed: 'very fast',
      direction: 155,
      keep: true,
      useContainerInlineStyles: true,
      useItemInlineStyles: true,
      containerClass: 'tagcloud',
      itemClass: 'tagcloud--item',
    })

    return () => {
      // Clean up the tag cloud on component unmount
      tagCloud.destroy()
    }
  }, [])
  

  useEffect(() => {
    const nameTimeout = setTimeout(() => {
      setNameLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(nameTimeout)
  }, [])

  return (
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
          I possess a strong skill set that covers various aspects of web development using the{' '}
          <span className="yellow">MERN (MongoDB, Express.js, React, Node.js) stack</span>.
        </p>
        <p align="left">
          I'm quite confident about other technologies like{' '}
          <span className="yellow">HTML, CSS, JavaScript, C++, MySQL</span> and <span className="yellow">Bootstrap</span>.
          I'm also confident in <span className="yellow">Data Structures and Algorithms</span> along with good problem-solving skills and excellent communication skills with a good command over languages like English, Hindi, and Marathi.
        </p>
        <p>
          I put special effort into optimizing my code and providing the best result. I guarantee commitment during work on any project at any time.
        </p>
      </div>
      
      <div ref={tagCloudRef} className="tagcloud-container"></div>
     
      <Loader type="pacman" />
    </div>
  )
}

export default Skills
