import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href='https://www.linkedin.com/in/francois-dinong/' target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href='https://github.com/French09?tab=repositories' target="_blank" rel="noreferrer" aria-label="GitHub">
          <BsGithub />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
