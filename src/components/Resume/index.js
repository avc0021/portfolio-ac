import React from "react";

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
          <h1>Resume</h1>
          <a href="https://docs.google.com/document/d/1vQMCjw9w_M-rwZhCUCfPWKmV6hYcc5ucvww9RfUCYZ4/edit?usp=sharing">Click here to download!</a>
        <h2 className="resume">Front-End Proficiences</h2>
        <p>
            HTML
            CSS
            JavaScript
            jQuery
            React 
            Bootstrap
            Bulma
        </p>
        <h2 className="resume">Back-End Proficiences</h2>
        <p>
            APIs
            Node
            Express
            MySql, Sequelize
            MonogoDB, Mongoose
            REST
        </p>
        <h2 className="resume">Other Proficiences</h2>
        <p>
            Gitbash
            Heroku
            Github
        </p>
      </div>
    </section>
  );
}

export default Resume;
