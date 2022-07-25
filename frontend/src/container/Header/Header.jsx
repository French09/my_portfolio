import React from 'react'

import { AppWrap } from '../../wrapper'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import './Header.scss'

const scaleVariant = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (

    // Pop up message
    <div id="accueil" className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Bonjour, je suis</p>
              <h1 className='head-text'>François</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Développeur Fullstack</p>
            <a href="../../assets/cv-fr.pdf" download>CV FR</a>
          </div>
        </div>
      </motion.div>

      {/* Profile pic */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.profile} alt="Profile de fond" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'eeaseInOut' }}
          className='app__header-img overlay_circle'
          src={images.circle}
          alt='profile-circle'
        />
      </motion.div>

      {/* Bubbles technos */}
      <motion.div
        variants={scaleVariant}
        whileInView={scaleVariant.whileInView}
        className='app__header-circles'
      >
        {[images.php, images.react, images.sass].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')