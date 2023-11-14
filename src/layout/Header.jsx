/* eslint-disable react/prop-types */
import seaLogo from '../../src/assets/images/SEA-logo.svg';
import '../styles/layout/header.scss';
function Header() {
  return (
    <header>
      <img src={seaLogo} alt='Logo SEA Web-Studio' className='seaLogo' />
      <nav>
        <a href='#About'>About</a>
        <a href='#Projects'>Projects</a>
        <a href='#Experiences'>Experiences</a>
        <a href='#ContactForm'>Contact</a>
        <div className='nav_buttons'>
          <button className='setLangage'>🚩</button>
          <button className='setThemeColor'>🌙</button>
        </div>
      </nav>
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
