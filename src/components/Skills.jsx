/* eslint-disable react/prop-types */
function Skills({datas}) {
    let icons = datas.skills.icons.map((icon, index) => (
      <div key={index}>
        <i className={icon.class}></i>
        <p>{icon.name}</p>
        <p>{icon.level}</p>
      </div>
    ));
  
    return (
      <section className="skills-section">
        {icons}
      </section>
    );
  }
  
  export default Skills;
  