import React from 'react';
import mns from '../../assets/proj-img/moon.png'


function Project1 () {

    return (
      <section className="p-p">
          <h1 className="portfolio">Portfolio</h1>
          <div className="mns">
            <h3 className="mns-1">My Night Sky</h3>
            <img src={mns} className="pImg" style={{ width: "30%" }} alt="cover" />
            <p className="descr">This app that tells you what is in the stars above you based on your geolocation or city input.</p>
            <h3>
            <a href="https://github.com/coevpen/my-night-sky" >View Project on GitHub</a> <br></br>
              <a href="https://coevpen.github.io/my-night-sky/">
                Deployed Link
              </a>
            </h3>
          </div>
      </section>
    )
  }
  
export default Project1;
