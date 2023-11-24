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
    <div className="banner-section ">
      <img src={seaLogo} alt="Logo SEA Web-Studio" className="unselectable" />
      <div className="content">
        <Typical
          // CHANGEZ LES WEB DEVELOPPER EN FR ET EN ANGLAIS //
          steps={[
            ". . .",
            1000,
        "Web Developper . . .",
            2000,
            "Web Developper & Designer . . .",
            2500,
            "Web Developper & Creator",
            2800,
          ]}
          loop={Infinity}
          wrapper="h1"
          className="typical"
        />
        {/* <a href="#about" className="btn CTA">
          <ExpandMoreIcon fontSize="large" color="white" className="CTA" />
        </a> */}
      </div>
    </div>
  );
}

export default Banner;
