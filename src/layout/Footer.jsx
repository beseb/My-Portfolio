import "../styles/main.scss";
import seaLogo from "/images/SEA-logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Contact from "../components/ContactForm";
import { useContext } from "react";
import { LangContext } from "../utils/LangContext";

function Footer({ isContactOpen, setIsContactOpen }) {
  const { datas } = useContext(LangContext);

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  return (
    <footer role="contentinfo" aria-label="Footer">
      <img src={seaLogo} alt="Logo SEA Web-Studio" className="seaLogo" />
      <div className="--content">
        <div className="links" role="navigation" aria-label="Liens de navigation">
          <a
            href="http://github.com/beseb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Aller sur mon Github"
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
            aria-label="Aller sur mon LinkedIn"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="footer-icons"
              color="blue"
            />
          </a>
          <button
            onClick={handleOpenContact}
            style={{
              border: "none",
              height: "100%",
              background: "transparent",
            }}
            aria-label="Ouvrir le formulaire de contact"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="footer-icons"
              color="grey"
              id="footer-contact-icon"
            />
          </button>
        </div>
        {isContactOpen && (
          <Contact
            isContactOpen={isContactOpen}
            setIsContactOpen={setIsContactOpen}
            datas={datas}
          />
        )}
        <p className="copyright">
          © 2023 SEA Web-Studio. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
