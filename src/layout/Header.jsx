/* eslint-disable react/prop-types */
import seaLogo from "/images/SEA-logo2.png";
import "../styles/main.scss";
import MobileNav from "../components/MobileNav";
import UkFlag from "/icons/united-kingdom-flag-icon.svg";
import FrFlag from "/icons/france-flag-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import Contact from "../components/ContactForm";
import { useContext } from "react";
import { LangContext } from "../utils/LangContext";


function Header({ isContactOpen, setIsContactOpen }) {
  const { lang, toggleLang, datas } = useContext(LangContext);
  const handleOpenContact = () => {
    setIsContactOpen(true);
  };
  return (
    <header>
      {" "}
      <img
        src={seaLogo}
        alt="Logo SEA Web-Studio"
        className="seaLogo"
        height="150px"
        width="150px"
      />{" "}
      <nav className="desktopNav">
        {" "}
        <a href="#about">{datas.basic_info.section_name.about}</a>{" "}
        <a href="#projects">{datas.basic_info.section_name.projects}</a>{" "}
        <a href="#experiences">{datas.basic_info.section_name.experience}</a>{" "}
        <a
          onClick={handleOpenContact}
          style={{ cursor: "pointer" }}
          aria-label="Open contact form"
        >
          {" "}
          Contact{" "}
        </a>{" "}
        <div className="nav_buttons">
          {" "}
          <a className="setLangage" onClick={toggleLang}>
            {" "}
            <img
              src={lang ? UkFlag : FrFlag}
              alt="set language to english/french"
              height="150px"
              width="150px"
            />{" "}
          </a>{" "}
          {/* <a className="setThemeColor">
            {" "}
            <FontAwesomeIcon icon={faSun} style={{ color: "#f1e904" }} />{" "}
            <FontAwesomeIcon icon={faMoon} style={{ color: "#2b5aab" }} />{" "}
          </a>{" "} */}
        </div>{" "}
      </nav>{" "}
      <MobileNav isContactOpen={isContactOpen} setIsContactOpen={setIsContactOpen} />{" "}
          {isContactOpen && (
            <Contact
              datas={datas}
              isContactOpen={isContactOpen}
              setIsContactOpen={setIsContactOpen}
            />
          )}{" "}
    </header>
  );
}
export default Header;
