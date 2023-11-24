/* eslint-disable react/prop-types */
import Typical from "react-typical";
import "../styles/main.scss";
import seaLogo from "/images/SEA-logo.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LangContext } from "../utils/LangContext";
import { useContext } from "react";

function Banner() {
  const { datas } = useContext(LangContext);

  return (
    <div className="banner-section">
      <img src={seaLogo} alt="Logo SEA Web-Studio" />
      <div className="content">
        <Typical
          // CHANGEZ LES WEB DEVELOPPER EN FR ET EN ANGLAIS //
          steps={[
            "Web Developper",
            1200,
            "Web Developper & Designer",
            800,
            "Web Developper & Creator",
            800,
          ]}
          loop={Infinity}
          wrapper="h1"
        />
        <a href="#about" className="btn CTA">
          <ExpandMoreIcon fontSize="large" color="white" className="CTA" />
        </a>
      </div>
    </div>
  );
}

export default Banner;
