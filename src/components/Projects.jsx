/* eslint-disable react/prop-types */
function Projects({ datas }) {
  let projects = datas.projects;

  let project = projects.map((project, index) => {
    let techs = project.technologies.map((tech, index) => (
      <span key={index} className={tech.class}>
        {tech.name}
      </span>
    ));

    return (
      <li key={index}>
        {project.title},{project.startDate};{project.description},
        {project.images},{project.url},{techs}
      </li>
    );
  });

  return <ul>{project}</ul>;
}

export default Projects;
