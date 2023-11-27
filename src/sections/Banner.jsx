/* eslint-disable react/prop-types */
import Typical from "react-typical";
import "../styles/main.scss";
import seaLogo from "/images/SEA-logo2.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LangContext } from "../utils/LangContext";
import { useContext } from "react";
import styled from "styled-components";
import pic_list from "../assets/datas/pic_list.json";
import ImageComponent from "../components/ImageComponent";
import ImageComponent2 from "../components/ImageComponent2";
function Banner() {
  const { datas } = useContext(LangContext);

  const BackDiv = styled.div`
    width: 30%;
    height: 55%;
    border-radius: 15px;
    opacity: 0.7;
    position: absolute;
    top: 500px;
    left: 110px;
    @media screen and (max-width: 768px){
      display:none;
    }
  `;
  const BackDiv2 = styled.div`
    width: 30%;
    height: 55%;
    border-radius: 15px;
    opacity: 0.7;
    position: absolute;
    top: 500px;
    right: 110px;
    @media screen and (max-width: 768px){
      display:none;
    }
  `;

  return (
    <div className="banner-section " role="banner">
      <BackDiv>
        <ImageComponent />
      </BackDiv>
      <BackDiv2>
        <ImageComponent2 />
      </BackDiv2>
      <img
        src={seaLogo}
        alt="Logo de SEA Web-Studio"
        className="unselectable"
        role="img"
        aria-label="Logo de SEA Web-Studio"
        height="500px"
        width="500px"
      />
      <div className="content">
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
