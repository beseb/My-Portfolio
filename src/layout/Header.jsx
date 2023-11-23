/* eslint-disable react/prop-types */
import seaLogo from '/images/SEA-logo.svg';
import '../styles/main.scss';
import MobileNav from '../components/MobileNav';
import LanguageIcon from '@mui/icons-material/Language';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness2Icon from '@mui/icons-material/Brightness2';

function Header() {
  return (
    <header>
      <img src={seaLogo} alt='Logo SEA Web-Studio' className='seaLogo' />
      <nav className='desktopNav'>
        <a href='#about'>About</a>

        <a href='#projects'>Projects</a>

        <a href='#experiences'>Experiences</a>

        <a href='#contact'>Contact</a>
        <div className='nav_buttons'>
          <a className='setLangage'><LanguageIcon/></a>
          <a className='setThemeColor'><WbSunnyIcon/></a>
        </div>
      </nav>
      <MobileNav />
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
