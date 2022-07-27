import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href='https://www.linkedin.com/in/francois-dinong/' target="_blank" rel="noreferrer">
            <BsLinkedin width="50px"/>
          </a>
        </div>
        <div className='app__social'>
          <a href='https://github.com/French09?tab=repositories' target="_blank" rel="noreferrer">
            <BsGithub width="50px"/>
          </a>
        </div>
    </div>
  )
}

export default SocialMedia