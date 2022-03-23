import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact'
import Footer from './components/Footer';

function App() {
  return (
    <HashRouter>
      <div className= 'App'>
        <Header/> 
        <div className='content'>
          
          <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          
        </div>
        <Footer/>
      </div>
    </HashRouter>

  );
}  

export default App;

