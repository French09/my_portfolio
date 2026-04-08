import React, { useEffect, useState } from "react";

import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import { motion } from "framer-motion";
import "./About.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <span className="section-eyebrow">01 — À propos</span>
      <h2 className="head-text">
        À propos de <span>moi</span>
      </h2>
      <p className="app__about-subtitle">
        Apprenti développeur passionné par le web, le mobile et les nouvelles technologies.
      </p>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="app__profile-item"
            key={about.title + index}
          >
            <div className="app__profile-img">
              <img src={urlFor(about.imgUrl)} alt={about.title} />
            </div>
            <h3 className="bold-text">{about.title}</h3>
            <p className="p-text">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'moi',
  'app__primarybg'
);
