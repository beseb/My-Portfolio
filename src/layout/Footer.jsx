import "../styles/main.scss";
import seaLogo from "/images/SEA-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Contact from "../components/ContactForm";

/* eslint-disable react/prop-types */

function Footer({ isContactOpen, setIsContactOpen }) {

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
              style={{ height: "3em", color: "black" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/sebastien-escudero/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ height: "3em", color: "blue" }}
            />
          </a>
          <a onClick={handleOpenContact}>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ height: "3em", color: "black", border: "none" }}
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
        <span className="copyright">
          © 2023 SEA Web-Studio. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
export default Footer;
