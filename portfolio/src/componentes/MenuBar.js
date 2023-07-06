import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




function MenuBar(props) {

  let linksMenu = props.links.map(link => 

    <Nav.Item key={link}>
      <Nav.Link href={`#${link}`}  className=" text-light border border-light p-2">{link}</Nav.Link>
    </Nav.Item>

  )

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
              {linksMenu}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
}

export default MenuBar;