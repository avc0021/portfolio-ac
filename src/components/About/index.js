import React from 'react'
//import coverImage from "../../assets/ac1";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Who am I?</h1>
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <div className="my-2">
        <p>
        Full Stack Web Developer leveraging a background in biotechnology and music to build life-enhancing user experiences on mobile and web applications. 
        Recently earned a Certificate in Full Stack Web Development from The University of Texas at San Antonio, with newly developed skills using MongoDB, Express.js, React.js, Node.js, JavaScript, 
        CSS, Node.js, HTML, MySQL, Heroku, GitHub/Bash, object-oriented programming, and responsive web design. While working with a team of four on a recent project, we created a MERN stack application 
        that allows a local business owner to help generate business. I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build an impactful user experience on the web.  
        It is my technical expertise, passion, and adaptability that make me an advantageous candidate for any team.
      </p>
      </div>
    </section>
  )
}

export default About;