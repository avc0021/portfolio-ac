import React, { useState } from 'react';
//import { BrowserRouter } from 'react-router-dom';
//import Router from './router/Router.js';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
//import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('About');
  const renderPage =() => {    
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  }
  const handlePageChange = (page) => setCurrentPage(page);
  
  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
      <Footer />
    </div>
  );
}


export default App;