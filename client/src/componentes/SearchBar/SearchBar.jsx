import React, { useState, useEffect } from "react";
import { cartButton, userButton, searchButton } from "../../Multimedia/Svgs";
import { Container, Row, Col } from "react-bootstrap";
import './SearchBar.css'

export default function SearchBar() {
  // ----- Funcionalidad ----

  //   const handleChange = (event) =>
  //     setSearch({ ...search, [event.target.name]: event.target.value });

  return (
    <Container fluid>
      <div className="contenedor">
        <Row>
        <Col>
          <div class="logo">
            <img
              src="https://i.pinimg.com/originals/0f/72/14/0f721400c190ad9a138cd12d71694cdf.png"
              alt="Logo"
              width="90px"
            />
          </div>
          <span class="">
        <input
          type="search"
          name="serch"
          placeholder="Buscar..."

        />
        <i class="fas">{searchButton}</i>
      </span>
      <div class="">
        <i class="fas"></i>
      </div>
        </Col>
        <Col md={{ span: 3, offset: 3 }}>
        <div class="botones">
        <div class="carrito">{cartButton}</div>
        <div class="usuario">{userButton}</div>
      </div>
        </Col>
      </Row>
      </div>
    </Container>
  );
}
