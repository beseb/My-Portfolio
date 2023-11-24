import "../styles/main.scss";
import seaLogo from "/images/SEA-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Contact from "../components/ContactForm";
import { useContext } from "react";
import { LangContext } from "../utils/LangContext";
/* eslint-disable react/prop-types */

function Footer({ isContactOpen, setIsContactOpen }) {
  const { datas } = useContext(LangContext);
  const handleOpenContact = () => {
    setIsContactOpen(true);
  };
  return (
    <footer>
      <img src={seaLogo} alt="Logo SEA Web-Studio" className="seaLogo" />
      <div className="--content">
        <div className="links">
          <a
            href="http://github.com/beseb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="footer-icons"
              color="black"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/sebastien-escudero/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="footer-icons"
              color="blue"
            />
          </a>
          <a onClick={handleOpenContact}>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="footer-icons"
              color="grey"
            />
          </a>
        </div>
        {isContactOpen && (
          <Contact
            isContactOpen={isContactOpen}
            setIsContactOpen={setIsContactOpen}
            datas={datas}
          />
        )}
        <p className="copyright">
          © 2023 SEA Web-Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
