/* eslint-disable react/prop-types */
function Skills({datas}) {
    let icons = datas.skills.icons.map((icon, index) => (
      <div key={index}>
        <i className={icon.class}></i>
        <h4>{icon.name}</h4>
        <p>Level : {icon.level}</p>
      </div>
    ));
  
    return (
      <section className="skills-section" id="skills">
        <div className="skills-section_container">{icons}</div>
      </section>
    );
  }
  
  export default Skills;
  