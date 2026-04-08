import React, { useState, useEffect, useRef } from 'react'
import './Navbar.scss'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { BsSun, BsMoon } from 'react-icons/bs'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'

const navItems = ['accueil', 'moi', 'projets', 'compétences', 'contact'];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navRef = useRef(null);

  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navRef.current) {
        const height = navRef.current.offsetHeight;
        document.documentElement.style.setProperty('--navbar-height', `${height}px`);
      }
    };

    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);
    return () => window.removeEventListener('resize', updateNavbarHeight);
  }, []);

  return (
    <nav ref={navRef} className='app__navbar'>
      <div className='app__navbar-logo'>
        <a href="#accueil">FD</a>
      </div>

      <ul className='app__navbar-links'>
        {navItems.map((item) => (
          <li key={item} className="p-text">
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-actions">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <BsSun /> : <BsMoon />}
        </button>
      </div>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        <AnimatePresence>
          {toggle && (
            <>
              <motion.div
                className="app__navbar-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setToggle(false)}
              />
              <motion.div
                className="app__navbar-panel"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              >
                <HiX onClick={() => setToggle(false)} />
                <ul>
                  {navItems.map((item) => (
                    <li key={item}>
                      <a href={`#${item}`} onClick={() => setToggle(false)}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
