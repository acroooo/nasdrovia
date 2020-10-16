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
import Results from "../Categoria/Categoria";
import Axios from "axios";

export default function SearchBar() {
  //Hooks

<<<<<<< HEAD
  const [search, setSearch] = useState({ query: "" });
  const [redirect, setRedirect] = useState(false);
=======

  const [search, setSearch] = useState({ query: "" });
  const [productos, setProductos] = useState({res:null, isLoaded:false})
  const [data, setData] = useState({res:null, isLoaded:false})
  const [cat, setCat] = useState({res:null, isLoaded:false});
>>>>>>> e3e28816082eb23bec8664f2d67bf11aa956e718

  // ----- Funcionalidad ----

  const handleChange = (event) => {
    event.preventDefault();
    setSearch({ ...search, query: event.target.value });
  };
  const handleClick =() =>{
    Axios.get(`http://localhost:3001/search?busqueda=${search.query}`).then(data=>{
      setData({res:data.data, isLoaded:true});
    })
    Axios.get('http://localhost:3001/categorias').then(data=>{
      setCat({
      res:data.data.map(e=>{
          e.select=false;
          return e
      }),
      isLoaded:true,
      })
  })
  }
  useEffect(()=>{
    if(data.isLoaded){
      setProductos(data);
    }
  },[data])

  return (
    <Container fluid>
      <Navbar className="navbar-custom" variant="dark">
        <Navbar.Brand href="/productos">
          <img
            src="https://i.pinimg.com/564x/ac/de/80/acde80ebc88d4dda88b10f7697cef890.jpg"
            alt="Logo"
            width="90px"
            height="90px"
          />
        </Navbar.Brand>
<<<<<<< HEAD
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
=======
>>>>>>> e3e28816082eb23bec8664f2d67bf11aa956e718
        <Form inline>
          <FormControl
            type="search"
            placeholder="Buscar..."
            onChange={handleChange}
            className="mr-sm-2"
          />
          <FormControl.Feedback />
            <Button onClick={handleClick} variant="outline-info">
              {searchButton}
            </Button>
<<<<<<< HEAD
          </Link>
          <div class="carrito">{cartButton}</div>

          <div class="usuario">{userButton}</div>
=======
        
          <div className="carrito"><i className="fas fa-shopping-bag icono-carro"/></div>
          
          <NavDropdown title={<i className="fas fa-user-circle"></i>} id="basic-nav-dropdown">
            <NavDropdown.Item href="/formulario-categoria">Formulario Categoria</NavDropdown.Item>
            <NavDropdown.Item href="/formulario-crud">Formulario Producto</NavDropdown.Item>
          </NavDropdown>
          <div className="usuario"></div>
      
>>>>>>> e3e28816082eb23bec8664f2d67bf11aa956e718
        </Form>
      </Navbar>
      {productos.isLoaded?
      <Redirect exact path={`/search/${search.query}`}>
    <Results productos={productos}
    cat={cat}
    setCat={setCat}
    setProductos={setProductos}
    data={data}
    />
    </Redirect>: <> </>
      }
    </Container>
  );
}
