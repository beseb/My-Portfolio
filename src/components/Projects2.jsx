import { useState } from 'react';
import '../styles/main.scss';
import '../styles/components/projects.scss';
import Card from './Card';

/* eslint-disable react/prop-types */
function Projects2({ datas }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  const openModal = (project) => {
    setModalOpen(true);
    setModalProject(project);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalProject(null);
  };

  const projects = datas.projects;

  const projectItems = projects.map((project, index) => {
    const techs = project.technologies.map((tech, techIndex) => (
      <span key={techIndex} className={tech.class}>
        {tech.name}
      </span>
    ));

    const images = project.images.map((image, imageIndex) => (
      <img key={imageIndex} src={image} alt={`Project ${index}`} />
    ));

    return (
      <li key={index}>
        <Card
          {...project}
          techs={techs}
          images={images}
          cta={datas.basic_info.cta_website}
          onClick={() => openModal(project)}
        />
      </li>
    );
  });

  const modal = modalProject && (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        <h3>{modalProject.title}</h3>
        <p>{modalProject.description}</p>
        <div>
          {modalProject.technologies.map((tech, techIndex) => (
            <span key={techIndex} className={tech.class}>
              {tech.name}
            </span>
          ))}
        </div>
        <div>
          {modalProject.images.map((image, imageIndex) => (
            <img key={imageIndex} src={image} alt={`Project ${modalProject.title}`} />
          ))}
        </div>
      </div>
      <div className="modal-overlay" onClick={closeModal} />
    </div>
  );

  return (
    <>
      <section className="projects-section" id="projects">
        <h2 className="section-title">{datas.basic_info.section_name.projects}</h2>
        <ul style={{ listStyle: 'none' }}>{projectItems}</ul>
      {modal}
      </section>
    </>
  );
}

export default Projects2;
