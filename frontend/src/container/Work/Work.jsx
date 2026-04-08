import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 30, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'Tous') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 400);
  };

  return (
    <>
      <h2 className="head-text">
        Mes <span>Projets</span>
      </h2>

      <div className="app__work-filter">
        {['Tous', 'Web', 'Mobile', 'React JS', 'PHP', 'Algorithmie'].map((item, index) => (
          <button
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-btn ${activeFilter === item ? 'active' : ''}`}
          >
            {item}
          </button>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.4, delayChildren: 0.4 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item" key={index}>
            <div className="app__work-img">
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <div className="app__work-hover">
                {work.projectLink && (
                  <a href={work.projectLink} target="_blank" rel="noreferrer" className="app__work-hover-btn">
                    <AiFillEye />
                  </a>
                )}
                {work.codeLink && (
                  <a href={work.codeLink} target="_blank" rel="noreferrer" className="app__work-hover-btn">
                    <AiFillGithub />
                  </a>
                )}
              </div>
            </div>

            <div className="app__work-content">
              <div className="app__work-tag">
                <span>{work.tags?.[0]}</span>
              </div>
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text">{work.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'projets',
  'app__primarybg',
);
