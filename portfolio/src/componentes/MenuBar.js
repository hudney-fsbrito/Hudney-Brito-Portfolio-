import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




function MenuBar(props) {

  return (


    <Navbar expand="md" >
      <Container>

        <Navbar.Brand href="#home">Hudney Brito</Navbar.Brand>

        <Navbar.Toggle type="button" className="btn btn-warning border border-light" data-bs-toggle="collapse" aria-controls="navbarSupportedContent"  aria-label="Toggle navigation">
          <i className="bi bi-list "></i>
        </Navbar.Toggle>

        <Navbar.Collapse  id="navbarSupportedContent">
          <div className="d-flex justify-content-end">

            <Nav className="ms-auto">

              <Nav.Link href="#">Página inicial</Nav.Link>
              <Nav.Link href="#projetos">Projetos</Nav.Link>
              <Nav.Link href="#conteudo-sobreMim">Sobre mim</Nav.Link>
              <Nav.Link href="contact.html">Contato</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
}

export default MenuBar;