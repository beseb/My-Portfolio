/* eslint-disable react/prop-types */
import "../styles/main.scss";
import CloseIcon from "@mui/icons-material/Close";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import AwesomeSliderStyles from "../styles/components/dark-slider.scss";
import AwesomeSliderStyles2 from "../styles/components/light-slider.scss";

function Modal({ isOpen, setIsOpen, project }) {
  // Fonction pour arrêter la propagation et fermer la modal
  const handleCloseClick = (event) => {
    event.stopPropagation(); // Empêche le clic de se propager au div.modal_overlay
    setIsOpen(); // Appelle la fonction pour fermer la modal
  };

  return (
    <div
      className="modal"
      style={{ display: isOpen ? "flex" : "none" }}
      role="dialog"
      aria-modal={isOpen}
      aria-labelledby={`modalTitle ${project}`}
      aria-describedby={project.description}
      aria-hidden={!isOpen}
    >
      <div
        className="modal_wrapper"
        onClick={(e) => e.stopPropagation()}
        role="document"
      >
        <button
          className="btnClose"
          onClick={handleCloseClick}
          style={{ border: "none" }}
          aria-label="Fermer la fenêtre modale"
        >
          <CloseIcon className="mui-close-icon" />
        </button>
        {/* <ImageCarousel className='.image-carousel' data={project}/> */}
        <AwesomeSlider
          cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
          bullets={false}
          animation="scaleOutAnimation"
          className="awesome-slider"
        >
          {project.images.map((image, index) => {
            return (
              <div
                className="slider-item"
                data-src={image}
                key={index}
                aria-label={`Image ${index + 1} du projet`}
              ></div>
            );
          })}
        </AwesomeSlider>
        <div className="modal_wrapper_content">
          <h3 className="modal_wrapper--title" id={project.title}>
            {project.title}
          </h3>

          <p
            className="modal_wrapper_content--description"
            id={`description : ${project.description}`}
          >
            {project.description}
          </p>
          <ul className="modal_wrapper_content--techs">
            {project.technologies.map((tech, index) => {
              return (
                <li key={index}>
                  <i className={tech.class} />
                  <span className="bold"> {tech.name}</span>
                </li>
              );
            })}
          </ul>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="modal_wrapper_content--linkCTA"
            aria-label={`Lien vers le site web du ${project.title}`}
          >
            {project.linkCTA}
          </a>
        </div>
      </div>
      <div className="modal_overlay" onClick={handleCloseClick}></div>
    </div>
  );
}

export default Modal;
