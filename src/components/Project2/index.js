import React from "react";
import social from "../../assets/proj-img/social.png";

function Project2() {
  return (
    <section className="projects">
      <div className="sna">
        <h3 className="sna-1">Social Network API</h3>
        <img
          src={social}
          className="pImg"
          style={{ width: "50%" }}
          alt="cover"
        />
        <p className="descr">
          An API for a social network web application where users can share
          their thoughts, react to friends’ thoughts, and create a friend list.
        </p>
        <h3>
          <a href="https://github.com/avc0021/Social-Network-API">
            View Project on GitHub
          </a>
          <br></br>
          <a href="https://user-images.githubusercontent.com/91796423/157597417-a99d3e47-98ec-4915-bef8-2faee0089261.mp4">
            Demo
          </a>
        </h3>
      </div>
    </section>
  );
}

export default Project2;
