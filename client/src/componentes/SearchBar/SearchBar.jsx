import React, { useState, useEffect } from "react";
import { cartButton, userButton, searchButton } from "../../Multimedia/Svgs";
import {
  Container,
  Nav,
  Navbar,
  Button,
  Form,
  FormControl,
  NavDropdown
} from "react-bootstrap";
import "./SearchBar.css";

export default function SearchBar() {
  // ----- Funcionalidad ----
  const [search, setSearch] = useState({})

  const handleChange = (event) => { 
    event.preventDefault()
    setSearch({ ...search, [event.target.name]: event.target.value }); 
  }

  return (
    <Container fluid>
      <Navbar className="navbar-custom" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src="https://i.pinimg.com/originals/0f/72/14/0f721400c190ad9a138cd12d71694cdf.png"
            alt="Logo"
            width="90px"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#inicio">Inicio</Nav.Link>
          <NavDropdown title="Cervezas" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Scotch</NavDropdown.Item>
            <NavDropdown.Item href="#">Honey</NavDropdown.Item>
            <NavDropdown.Item href="#">Ipa</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Ver más</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#ofertas">Ofertas</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="search"
            placeholder="Buscar..."
            onChange={handleChange}
            className="mr-sm-2"
          /><FormControl.Feedback />
          <Button onClick={handleChange} variant="outline-info">{searchButton}</Button>
          <div class="carrito">{cartButton}</div>
          <div class="usuario">{userButton}</div>
        </Form>
      </Navbar>
      </Container>
  );
}
