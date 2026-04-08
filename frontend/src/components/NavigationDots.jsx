import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['accueil', 'moi', 'projets', 'compétences', 'contact'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? {
          backgroundColor: 'var(--accent)',
          opacity: 1,
          transform: 'scale(1.3)'
        } : {}}
        aria-label={item}
      />
    ))}
  </div>
);

export default NavigationDots;
