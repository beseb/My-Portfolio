import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { LangContext } from "../utils/LangContext";
import UkFlag from "/icons/united-kingdom-flag-icon.svg";
import FrFlag from "/icons/france-flag-icon.svg";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import Contact from "../components/ContactForm";

function MobileNav({ isContactOpen, setIsContactOpen }) {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { datas, toggleLang, lang } = useContext(LangContext);

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  useEffect(() => {
    const checkIfMobile = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setShowMobileNav(false);
        setIsMobile(false);
      }
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const handleToggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <div className="mobileNav_container">
      {isMobile && (
        <FontAwesomeIcon
          icon={faBars}
          style={{ color: "#192843" }}
          onClick={handleToggleMobileNav}
          className={`btnToggleMenu ${showMobileNav ? "active" : "disactive"}`}
        />
      )}
      {isMobile && showMobileNav && (
        <nav className="mobileNav">
          <div
            className={`mobileNav_dropdown ${
              showMobileNav ? "opened" : "closed"
            }`}
          >
            <div className="_links">
              <a href="#about">{datas.basic_info.section_name.about}</a>
              <a href="#projects">{datas.basic_info.section_name.projects}</a>
              <a href="#experiences">
                {datas.basic_info.section_name.experience}
              </a>
              <a href="#contact" onClick={handleOpenContact}>
                Contact
              </a>
            </div>
            <div className="nav_buttons">
              <a className="setThemeColor">
                {/* <FontAwesomeIcon icon={faSun} style={{color: "#f1e904",}} /> */}
                {/* <FontAwesomeIcon icon={faMoon} style={{color: "#2b5aab",}} /> */}
              </a>
              <a className="setLangage" onClick={toggleLang}>
                <img src={lang ? UkFlag : FrFlag} height="50px" width="50px" />
              </a>
            </div>
          </div>
        </nav>
      )}
      {isContactOpen && (
        <Contact
          datas={datas}
          isContactOpen={isContactOpen}
          setIsContactOpen={setIsContactOpen}
        />
      )}
    </div>
  );
}

export default MobileNav;
