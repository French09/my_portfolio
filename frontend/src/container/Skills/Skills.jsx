import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const querySkills = '*[_type == "skills"]';

    client.fetch(querySkills).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        Compétences & <span>Technologies</span>
      </h2>

      <div className="app__skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1], y: [15, 0] }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="app__skills-item"
            key={skill.name}
          >
            <div className="app__skills-icon">
              <img src={urlFor(skill.icon)} alt={skill.name} />
            </div>
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'compétences',
);
