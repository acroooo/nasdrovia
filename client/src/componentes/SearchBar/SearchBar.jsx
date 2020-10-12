import React from "react";
import {
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
import Icons from "./icons.jsx"
import Search from "./search.jsx"
import "./SearchBar.css";

export default function SearchBar() {


  return (
    <Container fluid>
      <Navbar className="navbar-custom" variant="dark">
        <Navbar.Brand href="/">
          <img
            src="https://i.pinimg.com/564x/ac/de/80/acde80ebc88d4dda88b10f7697cef890.jpg"
            alt="Logo"
            width="90px"
            height="90px"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/productos">Tienda</Nav.Link>
        </Nav>
        <Search />
        <Icons />
      </Navbar>
    </Container>

  );
}