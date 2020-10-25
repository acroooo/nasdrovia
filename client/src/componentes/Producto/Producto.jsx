import React, { useState, useEffect } from "react";
import "./Producto.css";
import { useSelector, useDispatch } from "react-redux";
import { Card, Carousel, Container, Image, Button, Row } from "react-bootstrap";
import CarritoBoton from "../CarritoBoton/CarritoBoton";
import allActions from "../../redux/actions/allActions";
import Axios from "axios";
// =============== FIN IMPORTS ================ //

const Producto = (props) => {
  // VER SI PRODUCTO SE RENDEREA BIEN CON LA IMAGEN
  // =============== ESTADO DE REDUX ================ //
  const productoStore = useSelector(
    (state) => state.productos.TodosLosProductos
  );
  // const imagenes = useSelector((state) => state.images);
  // Imagen no funciona.
  const images = useSelector(
    (state) => state.productos.TodosLosProductos.images
  );
  const dispatch = useDispatch();

  const [cant, setCant] = useState(0);
  const [producto, setProducto] = useState({ res: {}, isLoaded: false }); //estado actual
  const [categoria, setCategoria] = useState({ res: {}, isLoaded: false });

  const id = props.match.params.id;
  console.log(images);
  useEffect(() => {
    dispatch(allActions.getProductoDetalle(id));
  }, []);
  // axios para un producto especifico con verificacion de ID
  // console.log(producto);
  // useEffect(() => {
  //   Axios.get(`http://localhost:3001/producto/${id}`)
  //     .then((data) => {
  //       if (props.match.params.id && data.data.id) {
  //         setProducto({ res: data.data, isLoaded: true });
  //       }
  //     })
  //     .catch((error) => console.log(error.message));
  // }, []);

  // traer categorias en base al producto
  // useEffect(() => {
  //   Axios.get(`http://localhost:3001/categorias/${id}`)
  //     .then((res) => {
  //       //ver como viene el objeto categorias en res
  //       if (props.match.params.id && res.data.id) {
  //         setCategoria({ res: res.data, isLoaded: true });
  //       }
  //     })
  //     .catch((error) => console.log(error.message));
  // }, []);

  // faltan funcionalidades
  const addCarro = (event) => {
    event.preventDefault();
    //hacerlo con localStorage
  };

  const removeCarro = (event) => {
    event.preventDefault();
  };
  return (
    <div className="producto__marco">
      {/* Seccion tarjeta producto */}
      <Card className="producto__tarjeta">
        {/* Ordenar CSS con nombre segun buenas practicas */}
        <Container className="imagen">
        {/* Ordenar tema imagenes o imagen segun se pueda pedir desde la DB */}
          <Carousel clasName="container">
            <Carousel.Item>
            <Image
              className="imagen-asd"
              src={'asd'}
              alt="Slide"
              /> 
            {/*data.imagen.map((imagen) => (
              }<Image
              className="imagen-asd"
              src={productoStore.images[0]}
              alt="Slide"
              />
            {/* Colocar flechas al carrousel */}
              {/* <Image
                className="d-block w-100"
                src="https://d26lpennugtm8s.cloudfront.net/stores/001/173/096/products/golden-coco-1024-frontal31-1ac22b0a311bc87c8c15939084750176-480-0.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src="https://d26lpennugtm8s.cloudfront.net/stores/001/173/096/products/golden-coco-1024-frontal31-1ac22b0a311bc87c8c15939084750176-480-0.jpg"
                className="d-block w-100"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="w-100"
                src="https://d26lpennugtm8s.cloudfront.net/stores/001/173/096/products/golden-coco-1024-frontal31-1ac22b0a311bc87c8c15939084750176-480-0.jpg"
                alt="Third slide"
              /> */}
            </Carousel.Item>
          </Carousel>
        </Container>

        {/* Mejorar diseño container */}
        <Container className="container2">
          <Card className="card3">
            <Card.Header className="body-cabecera">
              <h1>{productoStore.nombre}</h1>
              <Card.Text className="body-precio">
                ${productoStore.precio}
              </Card.Text>
            </Card.Header>
            <Card.Body className="body-tarjeta">
              {/* Añadir conexion a categorias segun id Producto */}
              <Card.Title>Categorías</Card.Title>
              <div className="body-descripcion">
                <Card.Text className="texto-descripcion">
                  {productoStore.descripcion}
                </Card.Text>
              </div>
              <div className="abajotexto">
                <Row>
                  <div className="stock-tarjeta">
                    <CarritoBoton
                      stock={productoStore.stock}
                      id={productoStore.id}
                    />
                  </div>
                </Row>
              </div>
            </Card.Body>

            <Card.Footer className="pie">
              {/* Funcion de agregar y remover producto del carro */}
              <Button className="botonRojo" onClick={addCarro}>
                Agregar al Carro
              </Button>
              <Button className="botonRojo" onClick={removeCarro}>
                Quitar del Carro
              </Button>
            </Card.Footer>
          </Card>
        </Container>
      </Card>
      {/* seccion productos similares*/}
      <div className="producto_similares"></div>
    </div>
  );
};

export default Producto;