/* eslint-disable react/prop-types */
import "../styles/main.scss";
import myPhoto from "/images/my-photo.png";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
import Contact from "./ContactForm";

function About({ datas }) {
  const [isOpenContact, setIsOpenContact] = useState(null);

  const handleOpenContact = () => {
    setIsOpenContact(true);
  };

  const handleCloseContact = () => {
    setIsOpenContact(null);
  };

  return (
    <section className="about-section" id="about">
      <div className="about-section_title">
        <h2 className="section-title">{datas.basic_info.section_name.about}</h2>
      </div>
      <div className="about-section_picture ">
        <div className="outerCircle">
          <div className="innerCircle">
            <img
              src={myPhoto}
              alt="Photo of S.Escudero from SEA Web-Studio"
            ></img>
          </div>
        </div>
      </div>
      <div className="about-section_content">
        <h3>{datas.basic_info.description_header}</h3>
        <h4>{datas.basic_info.description_1}</h4>
        <h4>{datas.basic_info.description_2}</h4>
        <h4>{datas.basic_info.description_3}</h4>
        <div className="--contact-wrapper">
          <a onClick={handleOpenContact} style={{ cursor: "pointer" }}>
            <EmailIcon className="--icons" onClick={handleOpenContact} />
            <h4>
              <strong style={{ color: "black" }}>
                {datas.basic_info.description_4}
              </strong>
            </h4>
          </a>
          {/* <FormspreeProvider project="2346908508634480159"> */}
            <Contact
              isOpenContact={isOpenContact}
              setIsOpenContact={setIsOpenContact}
              datas={{ datas }}
            />
          {/* </FormspreeProvider> */}
          <a href="/CV_ESCUDERO_Sebastien.pdf" download>
            <FileOpenIcon className="--icons" />
            <h4>
              <strong>C.V.</strong>
            </h4>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
