/* eslint-disable react/prop-types */
import "../styles/main.scss";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { useState, useContext } from "react";
import { LangContext } from "../utils/LangContext";
import ScrollAnimation from "react-animate-on-scroll";

function Projects() {
  const { datas } = useContext(LangContext);
  const [openProjectId, setOpenProjectId] = useState(null);

  const handleCardClick = (index) => {
    setOpenProjectId(index); // Définir l'ID du projet ouvert sur l'index actuel
  };

  const handleCloseModal = () => {
    setOpenProjectId(null); // Réinitialiser l'ID du projet ouvert
  };

  const projects = datas.projects.map((project, index) => {
    return (
      <li key={index} id={`project-card-${index}`} onClick={() => handleCardClick(index)} role="button" tabIndex={0} aria-label={`Ouvrir le projet ${project.title}`}>
        <Card datas={project} />
        <Modal
          isOpen={openProjectId === index}
          setIsOpen={handleCloseModal}
          project={project}
        />
      </li>
    );
  });

  return (
    <section className="projects-section" id="projects" role="region" aria-label="Projets">
      <h2 className="section-title">
        {datas.basic_info.section_name.projects}
      </h2>
      <ScrollAnimation animateIn="fadeIn">
        <ul>{projects}</ul>
      </ScrollAnimation>
    </section>
  );
}

export default Projects;
