/* eslint-disable react/prop-types */


function Experience({ datas }) {
  let experiences = datas.experience.map((exp, index) => {
    let techs = exp.technologies.map((tech, index) => (
      <li key={index} style={{listStyle:"none"}}><p>{tech}</p></li>
    ));

    return (
      <div key={index} className="experiences_container" style={{gridColumn : index + 1, gridRow: index + 1}}>
        <h3>{exp.title}</h3>
        <p className="italic">{exp.years}</p>
        <h4 className="bold">{exp.company}</h4>
        <p>Main Technology: <strong>{exp.mainTech}</strong></p>
        <ul>{techs}</ul>
      </div>
    );
  });

  return <section className="experiences-section" id="experiences">{experiences}</section>;
}

export default Experience;
