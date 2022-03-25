import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import About from "../components/About";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Contact from "../components/Contact";

export default class Router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/about" exact component={About}/>
                    <Route path="/projects" exact component={Projects}/>
                    <Route path="/resume" exact component={Resume}/>
                    <Route path="/contact" exact component={Contact}/>
                </Switch>
            </div>
        )
    }
}