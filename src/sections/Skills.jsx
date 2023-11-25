import "../styles/main.scss";

function Skills({ datas }) {
  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      
      <div className="carousel_container" role="list" aria-label="Carousel des compétences">
        <div className="carousel_track">
          {datas.skills.icons.map((icon, index) => {
            return (
              <div className="carousel-item" key={index} role="listitem">
                <i className={icon.class} aria-hidden="true"></i>
                <p className="name">{icon.name}</p>
              </div>
            );
          })}
          {datas.skills.icons.map((icon, i) => {
            return (
              <div className="carousel-item" key={i} role="listitem">
                <i className={icon.class} aria-hidden="true"></i>
                <p className="name">{icon.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
