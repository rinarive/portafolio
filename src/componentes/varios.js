import {React, Button} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Home from "./componentes/home"
import About from "./componentes/about"
import Projects from "./componentes/projects"
import Contact from "./componentes/contact"


const router =()=> {
  return (
    <Router>
      <div>
        <ul>
          <Button>
            <Link to="/">Home</Link>
          </Button>
          <Button>
            <Link to="/about">About</Link>
          </Button>
          <Button>
            <Link to="/projects">Projects</Link>
          </Button>
          <Button>
            <Link to="/contact">Contact</Link>
          </Button>
        </ul>

        <hr />

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
    </Router>
  );
 
}

export default router;

