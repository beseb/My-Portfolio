/* eslint-disable react/prop-types */
import "../styles/main.scss";
import myPhoto from "/images/my-photo.webp";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import EmailIcon from "@mui/icons-material/Email";
import Contact from "../components/ContactForm";
import { LangContext } from "../utils/LangContext";
import { useContext } from "react";
import ScrollAnimation from "react-animate-on-scroll";

function About({ isContactOpen, setIsContactOpen }) {
  const { datas } = useContext(LangContext);

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  return (
    <section
      className="about-section"
      id="about"
      role="region"
      aria-label="À propos de moi"
    >
        <div className="about-section_title">
          <h2 className="section-title">
            {datas.basic_info.section_name.about}
          </h2>
        </div>
        <div
          className="about-section_picture "
          role="img"
          aria-label="Ma photo de SEA Web-Studio"
        >
          <div className="outerCircle">
            <div className="innerCircle">
              <img
                src={myPhoto}
                alt="Photo of S.Escudero from SEA Web-Studio"
              ></img>
            </div>
          </div>
        </div>
        <ScrollAnimation animateIn="fadeIn" className="about-section_content">
          <div className="heading-content">
            <h3>{datas.basic_info.description_header}</h3>
            <div
              className="about-section_picture mobile-pic"
              role="img"
              aria-label="Ma photo de SEA Web-Studio"
            >
              <div className="outerCircle mobile-pic">
                <div className="innerCircle mobile-pic">
                  <img
                    src={myPhoto}
                    alt="Photo of S.Escudero from SEA Web-Studio"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <h4>{datas.basic_info.description_1}</h4>
          <h4>{datas.basic_info.description_2}</h4>
          <h4>{datas.basic_info.description_3}</h4>
          <div className="--contact-wrapper">
            <button
              onClick={handleOpenContact}
              style={{
                cursor: "pointer",
                background: "transparent",
                border: "none",
              }}
              aria-label="Ouvrir le formulaire de contact"
            >
              <EmailIcon
                className="--icons"
                onClick={handleOpenContact}
                style={{ height: "100%" }}
                color="blue"
              />
              <h4>
                <strong style={{ color: "black" }}>
                  {datas.basic_info.description_4}
                </strong>
              </h4>
            </button>
            {isContactOpen && (
              <Contact
                isContactOpen={isContactOpen}
                setIsContactOpen={setIsContactOpen}
                datas={datas}
              />
            )}
            <a href="/CV_ESCUDERO_Sebastien.pdf" download>
              <FileOpenIcon
                className="--icons"
                role="img"
                aria-label="Icône de document"
              />
              <h4>
                <strong>C.V.</strong>
              </h4>
            </a>
          </div>
        </ScrollAnimation>
    </section>
  );
}

export default About;
