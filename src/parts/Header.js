import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function Header(props) {
  return (
    <Container fluid bg="dark">
      <div className="container">
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand href="/">
            <h3>Cari Kursus IT</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav className="text-xxs">
              <Nav.Link href="/">Beranda</Nav.Link>
              <Nav.Link eventKey={2} href="/kelas">
                Semua Kelas
              </Nav.Link>
              <Nav.Link eventKey={3} href="/platform">
                Penyedia Kursus
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Container>
  );
}
