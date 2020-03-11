import React, {Component} from "react";
import { Switch, Route} from "react-router-dom";
import './App.css';
//componentes
import Home from "./componentes/home"
import About from "./componentes/about"
import Projects from "./componentes/projects"
import Contact from "./componentes/contact"


class  App extends Component {
  render(){


    return (
      <div className = "App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      
      </div>
  );
 }
 
}

export default App;
