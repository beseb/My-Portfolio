import '../styles/main.scss';
import '../styles/components/projects.scss'
import Card from './Card';

/* eslint-disable react/prop-types */
function Projects({ datas }) {
  let projects = datas.projects;

  let projectItems = projects.map((project, index) => {
    let techs = project.technologies.map((tech, techIndex) => (
      <span key={techIndex} className={tech.class}>
        {tech.name}
      </span>
    ));

    let images = project.images.map((image, imageIndex) => (
      <img key={imageIndex} src={image} alt={`Project ${index}`} />
    ));

    return (
      <li key={index}>
        <Card {...project} techs={techs} images={images} cta={datas.basic_info.cta_website}>
        </Card>
      </li>
    );
  });

  return <section className="projects-section">
    <ul style={{listStyle:"none"}}>{projectItems}</ul>
  </section>;
}

export default Projects;
