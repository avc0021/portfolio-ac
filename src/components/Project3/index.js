import React from 'react';
import bt from '../../assets/proj-img/budget.png';

function Project3 () {

    return (
      <section className="projects-bt">

          <div className="bt">
            <h3>Budget Tracker</h3>
            <img src={bt} className="pImg" style={{ width: "65%" }} alt="cover" />
            <p className="descr">Budget Tracker allows the user to track withdrawals and deposits with or without data/internet connection. This will allow the user to accurately balance account.</p>
            <h3>
            <a href="https://github.com/avc0021/Budget-Tracker">View Project on GitHub</a><br></br>
            <a href="https://stormy-headland-24832.herokuapp.com/">Deployed Link</a>
            </h3>
          </div>
      </section>
    )
  }
  
export default Project3;