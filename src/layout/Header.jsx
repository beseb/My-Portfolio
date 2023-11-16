/* eslint-disable react/prop-types */
import seaLogo from '/images/SEA-logo.svg';
import '../styles/main.scss';
import MobileNav from '../components/MobileNav';


function Header() {
  return (
    <header>

      <img src={seaLogo} alt='Logo SEA Web-Studio' className='seaLogo'/>
      <nav className='desktopNav'>
        <a href='#about'>About</a>
        <a href='#projects'>Projects</a>
        <a href='#experiences'>Experiences</a>
        <a href='#contactForm'>Contact</a>
        <div className='nav_buttons'>
          <button className='setLangage'>🚩</button>
          <button className='setThemeColor'>🌙</button>
        </div>
      </nav>
      <MobileNav/>
      {/* <div className="langagePickerDiv">
                <div onClick={()=>{
                    setLangage = "english";
                  }}><span><img
                  alt="United States"
                  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg" height={"30px"} width={"30px"}/></span></div>
                <div onClick={()=>{
                    setLangage = "french"
                }}><span><img
  alt="United States"
  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"height={"30px"} width={"30px"} /></span></div>
                </div> */}
    </header>
  );
}

export default Header;
