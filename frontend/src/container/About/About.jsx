import React, { useEffect, useState } from 'react'

import { urlFor, client } from '../../client'
import { AppWrap } from '../../wrapper'
import { motion } from 'framer-motion'
// import { images } from '../../constants'
import './About.scss'

// const abouts = [
//   {
//     title: "Développeur Front-end",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quaerat?",
//     imgURL: images.about01
//   },
//   {
//     title: "Développeur Back-end",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, fuga!",
//     imgURL: images.about02
//   },
//   {
//     title: "Annonce",
//     description: "En recherche d'alternance",
//     imgURL: images.about03
//   }
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => { setAbouts(data); });
  }, [])

  return (
    <>
      <h2 id='moi' className="head-text">
        Apprenti développeur à la recherche d'une <span>alternance</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opcaity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }} >{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }} >{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(About, 'about')