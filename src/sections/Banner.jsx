/* eslint-disable react/prop-types */
import Typical from "react-typical";
import "../styles/main.scss";
import seaLogo from "/images/SEA-logo.webp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LangContext } from "../utils/LangContext";
import { useContext } from "react";

function Banner() {
  const { datas } = useContext(LangContext);

  return (
    <div className="banner-section " role="banner">
      <img src={seaLogo} alt="Logo de SEA Web-Studio" className="unselectable" role="img" aria-label="Logo de SEA Web-Studio" />
      <div className="content">
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
          wrapper="h1"
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
