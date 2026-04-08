import React from 'react'

import { AppWrap } from '../../wrapper'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import curriculumVitae from './cv_fr-dinong-MSC.pdf'
import './Header.scss'

const Header = () => {
  return (
    <div className='app__header'>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className='app__header-content'
      >
        <span className='app__header-eyebrow'>Disponible pour alternance · 2025</span>
        <h1 className='app__header-name'>François Dinong</h1>
        <div className='app__header-rule' />
        <h2 className='app__header-title'>Développeur Fullstack</h2>
        <p className='app__header-description'>
          Apprenti développeur passionné, à la recherche d'une alternance pour
          construire des expériences web modernes et performantes.
        </p>

        <div className='app__header-cta'>
          <a
            href={curriculumVitae}
            download="cv_fr-dinong.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary"
          >
            Voir mon CV
          </a>
          <a href="#contact" className="btn btn--outline">
            Me contacter
          </a>
        </div>

        <div className='app__header-tech'>
          {[images.react, images.node, images.python, images.typescript].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
              className='app__header-tech-icon'
            >
              <img src={img} alt="tech" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.93 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        className='app__header-img'
      >
        <div className="app__header-img-frame">
          <div className="app__header-img-wrapper">
            <img src={images.profile} alt="François Dinong" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'accueil')
