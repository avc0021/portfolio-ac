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
          
          <Route exact path="/" component={About}/>

            <Route exact path="/about" component={About}/>
 
            <Route exact path="/projects" component={Projects}/>

            <Route exact path="/resume" component={Resume}/>

            <Route exact path="/contact" component={Contact}/>

          
        </div>
        <Footer/>
      </div>
    </HashRouter>

  );
}  

export default App;

