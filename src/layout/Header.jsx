/* eslint-disable react/prop-types */
import seaLogo from "/images/SEA-logo.svg";
import "../styles/main.scss";
import MobileNav from "../components/MobileNav";
import UkFlag from "/icons/united-kingdom-flag-icon.svg";
import FrFlag from "/icons/france-flag-icon.svg";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import Contact from "../components/ContactForm";

function Header({ datas, isContactOpen, setIsContactOpen }) {
  const handleOpenContact = () => {
    setIsContactOpen(true);
  };
  return (
    <header>
      <img src={seaLogo} alt="Logo SEA Web-Studio" className="seaLogo" />
      <nav className="desktopNav">
        <a href="#about">About</a>

        <a href="#projects">Projects</a>

        <a href="#experiences">Experiences</a>

        <a onClick={handleOpenContact} style={{cursor:'pointer'}}>
          Contact
        </a>
        {isContactOpen && (
          <Contact
            datas={datas}
            isContactOpen={isContactOpen}
            setIsContactOpen={setIsContactOpen}
          />
        )}
        <div className="nav_buttons">
          <a className="setLangage">
            <img src={UkFlag}></img>
          </a>
          <a className="setThemeColor">
            <WbSunnyIcon />
          </a>
        </div>
      </nav>
      <MobileNav />
    </header>
  );
}

export default Header;
