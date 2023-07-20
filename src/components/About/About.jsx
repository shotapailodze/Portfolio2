import React from 'react'
import './About.scss'

function About() {
  return (
    <div className='main-container'>
        <div className='container'>
            <div>
                <div className='text-box'>
                    <p className='title'>Front-End Developer</p>
                    <h1>I'm Shota</h1>
                    <p>Highly motivated and talented junior front-end developer with a strong passion for web development and a solid foundation in HTML, CSS, JavaScript and React</p>
                </div>
                <div>
                    <a href='#'><img src='/src/images/miscimages/github.png' alt='github' className='icon'></img></a>
                    <a href='#'><img src='/src/images/miscimages/linkedin.png' alt='linkedin' className='icon'></img></a>
                </div>
            </div>
            <div>
                    <img src="/src/images/profileimg/IMG_0059.jpg" alt="profileimage" className='profile'/>
            </div>

        </div>

    </div>
  )
}

export default About