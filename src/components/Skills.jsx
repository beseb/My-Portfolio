/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import '../styles/main.scss';

function Skills({ datas }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const icons = datas.skills.icons;
  return (
    <section className='skills-section' id='skills'>
      <div className='skills-section_overlay'>
        <div className='skills-section_carousel'>
          <div className='carousel_container' style={{ animationDelay: '0s' }}>
            {icons.map((icon, index) => (
              <div
                key={index}
                className={`skills-icons ${
                  index === currentIndex ? 'active' : ''
                }`}
              >
                <i className={icon.class} style={{ color: icon.iconColor }} />
                <h4>{icon.name}</h4>
              </div>
            ))}
          </div>
          <div className='carousel_container' >
            {icons.map((icon, index) => (
              <div
                key={index + icons.length}
                className={`skills-icons ${
                  index === currentIndex ? 'active' : ''
                }`}
              >
                <i className={icon.class} style={{ color: 'black' }} />
                <h4>{icon.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
