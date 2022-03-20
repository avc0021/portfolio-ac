import React from 'react';
import Navbar from '../Navbar'
import logo from '../../assets/ac1/logo.png';


function Header () {

    return (
      <section className="header">
        <section className="header-top">
          <section className="header-top__logo">
            <a href="/about" className="header-logo">
            <img src={logo} className="my-2" style={{ width: "105%" }} alt="cover" />
            </a>
          </section>
          <section className="header-top__navbar">
            <section className="header-top__navigation">
              <Navbar />
            </section>
            <hr className="header-top__seperator" />
          </section>
        </section>
      </section>
    )
  }
  
  export default Header;
