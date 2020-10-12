import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { cartButton, userButton, searchButton } from "../../Multimedia/Svgs";
import {
  Container,
  Nav,
  Navbar,
  Button,
  Form,
  FormControl,
  NavDropdown,
  Badge,
} from "react-bootstrap";
import "./SearchBar.css";

export default function SearchBar() {
  //Hooks

  const [search, setSearch] = useState({ query: "" });
  const [redirect, setRedirect] = useState(false);

<<<<<<< HEAD

  const handleChange = (event) => { 
    event.preventDefault()
    setSearch({ ...search, [event.target.name]: event.target.value }); 
  }


=======
>>>>>>> be948e52aacb27cf262011fd365c7e2bc05ad043
  // ----- Funcionalidad ----

  const handleChange = (event) => {
    event.preventDefault();
    setSearch({ ...search, [event.target.name]: event.target.value });
  };
<<<<<<< HEAD

=======
>>>>>>> be948e52aacb27cf262011fd365c7e2bc05ad043

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
          <Nav.Link href="http://localhost:3000/productos">Tienda</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="search"
            placeholder="Buscar..."
            onChange={handleChange}
            className="mr-sm-2"
          />
          <FormControl.Feedback />
          <Link to={`/search?query=${search.query}`}>
            <Button onClick={handleChange} variant="outline-info">
              {searchButton}
            </Button>
          </Link>
          <div className="carrito">{cartButton}</div>

          <div className="usuario">{userButton}</div>
        </Form>
      </Navbar>
    </Container>
  );
}
