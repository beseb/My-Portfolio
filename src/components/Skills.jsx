import { useState, useEffect } from "react";
import "../styles/main.scss";

function Skills({ datas }) {
  return (
    <section className="skills-section" id="skills">
      <div className="carousel_container">
        <div className="carousel_track">
          {datas.skills.icons.map((icon, index) => {
            return (
              <div className="carousel-item" key={index}>
                <i className={icon.class} style={{color: icon.iconColor}}></i>
                <p className="name">{icon.name}</p>
              </div>
            );
          })}
          {datas.skills.icons.map((icon, i) => {
            return (
              <div className="carousel-item" key={i}>
                <i className={icon.class} style={{color: icon.iconColor}}></i>
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
