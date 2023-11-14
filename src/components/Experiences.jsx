/* eslint-disable react/prop-types */
function Experience({ datas }) {
  let experiences = datas.experience.map((exp, index) => {
    let techs = exp.technologies.map((tech, index) => (
      <li key={index}>{tech}</li>
    ));

    return (
      <div key={index}>
        <h3>{exp.title}</h3>
        <p>{exp.years}</p>
        <p>{exp.company}</p>
        <p>Main Technology: {exp.mainTech}</p>
        <ul>{techs}</ul>
      </div>
    );
  });

  return <div>{experiences}</div>;
}

export default Experience;
