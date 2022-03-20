import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';

import Projects from './components/Projects';
import Contact from './components/Contact'
//import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className= 'App'>
        <Header/>
        <div className='content'>
          <Switch>
            <Route path='/about'>
              <About/>
            </Route>
            <Route path='/projects'>
              <Projects/>
            </Route>
            <Route path='/contact'>
              <Contact/>
            </Route> 
          </Switch>
        </div>
      </div>
    </Router>

  );
}  

export default App;

