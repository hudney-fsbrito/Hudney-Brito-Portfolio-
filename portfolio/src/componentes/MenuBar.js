import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




function MenuBar(props) {

  return (


    <Navbar expand="md" >
      <Container >

        <Navbar.Brand href="#home" className="text-light ">Hudney Brito</Navbar.Brand>

        <Navbar.Toggle type="button" className="btn btn-primary border border-light" data-bs-toggle="collapse" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
          <i className="bi bi-list text-light"></i>
        </Navbar.Toggle>

        <Navbar.Collapse className="d-xxl-flex justify-content-end" id="navbarSupportedContent">
          <div className="d-flex justify-content-end">

            <Nav className="ms-3 d-flex gap-2">
              <Nav.Item >
                <Nav.Link href="#" className=" text-light border border-light p-2">Página inicial</Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link href="#projetos" className=" text-light border border-light p-2">Projetos</Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link href="#conteudo-sobreMim" className=" text-light border border-light p-2">Sobre mim</Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link href="contact.html" className=" text-light border border-light p-2">Contato</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
}

export default MenuBar;