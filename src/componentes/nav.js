import React from "react"
import Nav from 'react-bootstrap/Nav'
function Nave() {
    return (
        <>
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/projects">Proyectos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/contact">Contacto</Nav.Link>
          </Nav.Item>
        </Nav>
      </>
    );
  }
export default Nave
