import React from "react";
// bootstrap navbar components
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// logo
// import logo from "../images/logoA.png";

const Navigation = () => {
  return (
    <Navbar bg="primary" expand="lg" fixed="top">
<<<<<<< Updated upstream
      <Container>
        <Navbar.Brand href="#about">Avery Blake</Navbar.Brand>
=======
      <Container className="navbar-container">
        <Navbar.Brand href="#home">Avery Blake</Navbar.Brand>
>>>>>>> Stashed changes
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
<<<<<<< Updated upstream
=======
            <Nav.Link href="#about">About</Nav.Link>
>>>>>>> Stashed changes
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
