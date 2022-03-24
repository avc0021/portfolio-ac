//import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
//import Navbar from './components/Navbar'
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact'
import Footer from './components/Footer';
import { createBrowserHistory } from 'history';

function App() {
  return (
    <Router>
      <div className= 'App'>
        <Header/> 
        <div className='content'>
          <Switch>
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
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>

  );
}  

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});
export default App;
