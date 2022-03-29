import React from 'react';
import iru from '../../assets/proj-img/iru.png';


function Project4 () {

    return (
      <section className="projects">

          <div className="iru">
            <h3 className="iru-1">Instruments R Us</h3>
            <img src={iru} className="pImg" style={{ width: "50%" }} alt="cover" />
            <p className="descr">This app allows the user to post music instruments to share and sell.</p>
            <h3>
            <a href="https://github.com/avc0021/InstrumentsRUs">View Project on GitHub</a><br></br>
            <a href="https://mysterious-harbor-28313.herokuapp.com/">Deployed Link</a>
            </h3>
          </div>
      </section>
    )
  }
  
export default Project4;
