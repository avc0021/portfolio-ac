import React from 'react';
import Navbar from '../Navbar'
import logo from '../../assets/ac1/logo.png';


function Header ({ currentPage, handlePageChange }) {

    return (
      <section className="header">
        <section className="header-top">
          <section className="header-top__logo">
            <div className="header-logo">
            <img src={logo} className="my-6" alt="cover" />
            </div>
          </section>
          <section className="header-top__navbar">
            <section className="header-top__navigation">
              <Navbar
              currentPage={currentPage}
              handlePageChange={handlePageChange} />
            </section>
            <hr className="header-top__seperator" />
          </section>
        </section>
      </section>
    )
  }
  
  export default Header;

