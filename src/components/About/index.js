import React from 'react'
import coverImage from "../../assets/ac1/aj.jpg";
//import {useHistory} from 'react-router-dom'


const About = () => {
  return (
    <section className="my-5" >
      <div className="my-2">
      <img src={coverImage} className="coverImg" style={{ width: "20%" }} alt="cover" />
      <h1 className="about">About Me</h1>
        <p>
        Full Stack Web Developer leveraging a background in biotechnology and music to build life-enhancing user experiences on mobile and web applications. 
        Recently earned a Certificate in Full Stack Web Development from The University of Texas at San Antonio, with newly developed skills using MongoDB, Express.js, React.js, Node.js, JavaScript, 
        CSS, Node.js, HTML, MySQL, Heroku, GitHub/Bash, object-oriented programming, and responsive web design. I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build an impactful user experience on the web.  
        </p>
      </div>
    </section>
  )
}

export default About;