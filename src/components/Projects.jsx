/* eslint-disable react/prop-types */
import '../styles/main.scss';
import '../styles/components/projects.scss';
import Card from './Card';
import Modal from './Modal';
import { useState, useEffect } from 'react';

function Projects({ datas }) {
  const [openProjectId, setOpenProjectId] = useState(null);

  const handleCardClick = (index) => {
    setOpenProjectId(index); // Définir l'ID du projet ouvert sur l'index actuel
  };

  const handleCloseModal = () => {
    setOpenProjectId(null); // Réinitialiser l'ID du projet ouvert
  };

  const projects = datas.projects.map((project, index) => {

    return (
      <li key={index} id='project-card' onClick={() => handleCardClick(index)}>
        <Card datas={project}  />
        <Modal isOpen={openProjectId === index} setIsOpen={handleCloseModal} project={project} />
      </li>
    );
  });

  return (
    <section className='projects-section'>
      <h2 className='section-title'>{datas.basic_info.section_name.projects}</h2>
      <ul>{projects}</ul>
    </section>
  );
}

export default Projects;
