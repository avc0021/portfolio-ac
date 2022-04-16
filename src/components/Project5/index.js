// this is where project 5 will go also will add charka, hero Image, and use figmaimport React from 'react';
import React from "react";
import iru from "../../assets/proj-img/parachuteplay.png";

function Project5() {
  return (
    <section className="projects">
      <div className="iru">
        <h3 className="iru-1">Parachute Play</h3>
        <img src={iru} className="pImg" style={{ width: "50%" }} alt="cover" />
        <p className="descr">
          Word Game suitable for both kids and adults powered behind the fun,
          sometimes scary, alternative minds of team Jam
        </p>
        <h3>
          <a href="https://github.com/jessebubble/parachute-play">
            View Project on GitHub
          </a>
          <br></br>
          <a href="https://jam-group-project.herokuapp.com/">Deployed Link</a>
        </h3>
      </div>
    </section>
  );
}

export default Project5;
