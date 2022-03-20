import React from 'react';
import { Route, Switch } from "react-router";
//import Header from './components/Header';
import About from './components/About';
y
import Projects from './components/Projects';
//import Contact from './components/Contact'
//import Footer from './components/Footer';

export default function App() {
  return (
  <Switch>
    <Route exact path="/projects">
      <Projects/>
    </Route>
    <Route path="/about">
      <About />
    </Route>
    {/* <Route path="/:user">
      <User />
    </Route>
    <Route>
      <NoMatch />
    </Route> */}
  </Switch>
);
  }  

