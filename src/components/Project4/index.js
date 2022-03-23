import React from 'react';
import iru from '../../assets/proj-img/iru.png';


function Project4 () {

    return (
      <section className="projects">

          <div className="iru">
            <h3 className="iru-1">Instruments R Us</h3>
            <img src={iru} className="pImg" style={{ width: "50%" }} alt="cover" />
            <p className="descr">An app that tells you what is in the stars above you based on your geolocation or city input.</p>
            <h3>
            <a href="https://github.com/avc0021/InstrumentsRUs">View Project on GitHub</a><br></br>
            <a href="https://mysterious-harbor-28313.herokuapp.com/">Deployed Link</a>
            </h3>
          </div>
      </section>
    )
  }
  
export default Project4;