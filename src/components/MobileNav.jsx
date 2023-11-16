import { useState, useEffect } from 'react';
import faBars from '../../public/icons/faBars.svg';
import '../styles/main.scss';

function MobileNav() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMobileNav(false);
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <div className='mobileNav_container'>
      {isMobile && (
        <button onClick={handleToggleMobileNav} className='btnToggleMenu'>
          <img src={faBars} alt='open Menu' />
        </button>
      )}
      {isMobile && showMobileNav && (
        <nav className='mobileNav'>
          <div className="mobileNav_dropdown">
            <a href='#about'>About</a>
            <a href='#projects'>Projects</a>
            <a href='#experiences'>Experiences</a>
            <a href='#contactForm'>Contact</a>
            <div className='nav_buttons'>
              <button className='setLangage'>🚩</button>
              <button className='setThemeColor'>🌙</button>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}

export default MobileNav;
