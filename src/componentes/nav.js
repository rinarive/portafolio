import React, { Fragment } from "react";
import "../App.css";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import { Navbar, Nav } from 'react-bootstrap'
import logo from './images/logoYellow.png'
//componentes
import Home from "./home"
import About from "./about"
import Projects from "./projects"
import Contact from "./contact"


function Nave() {
   
  return (
    <Fragment >

      <Router>
        <Navbar className="nav" expand="lg">
          <Navbar.Brand href="/"><img className="logo" src={logo} alt="logo" width={65} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="nav">
              <Nav.Item>
                <Link to="/" className="Link" >Home</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/about" className="Link">Perfil</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/projects" className="Link">Portafolio</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/contact" className="Link">Contacto</Link>
              </Nav.Item>
              </Nav>            
             
          </Navbar.Collapse>
        </Navbar>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/contact" component={Contact}/>  

      </Router>

    </Fragment>
  );
}


export default Nave
