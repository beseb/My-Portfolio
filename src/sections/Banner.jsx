/* eslint-disable react/prop-types */
import Typical from "react-typical";
import "../styles/main.scss";
import seaLogo from "/images/SEA-logo2.png";
import { LangContext } from "../utils/LangContext";
import { useContext } from "react";

function Banner() {
  const { datas } = useContext(LangContext);

  return (
    <div className="banner-section " role="banner">
      <div className="content">
        <img
          src={seaLogo}
          alt="Logo de SEA Web-Studio"
          className="unselectable"
          role="img"
          aria-label="Logo de SEA Web-Studio"
          height="500px"
          width="500px"
        />
        <h1 style={{ visibility: "hidden", height: "0px", width: "0px" }}>
          SEA Web-Studio
        </h1>
        <Typical
          steps={[
            ". . .",
            1000,
            " Web Developper . . .",
            2000,
            "Web Developper & Designer . . .",
            2500,
            "Web Developper & Creator !",
            2800,
          ]}
          loop={Infinity}
          wrapper="h2"
          className="typical"
          aria-label="Texte animé : développeur web, designer et créateur"
        />
        {/* <a href="#about" className="btn CTA">
          <ExpandMoreIcon fontSize="large" color="white" className="CTA" />
        </a> */}
      </div>
    </div>
  );
}

export default Banner;
