import React, {useState, useEffect} from "react";
import "./Producto.css";
import { Card, Carousel, Container, Image, Button, Row} from "react-bootstrap";
import Axios from 'axios';


/* TODO LIST

[] - PRIORIDAD! - Función para agregar producto al carro.
[] - PRIORIDAD! - Función para quitar producto del carro.
[] - Sector Categorías
[] - PRIORIDAD! - Diseño => ¿ Como podrían quedar mejor los colores?
[] - Framer Motion
[] - Compartir Producto redes sociales => En base a elecciones de usuarios?
[] - Seccion "Productos similares"
[] - Infinite Scroll
[] - PRIORIDAD! - Flechas Carrousel
[] - Arreglar CSS Card

- ¿Falta algo más?
- Ver lo que hay que implementar esta semana


*/


const Producto = (props) => {
  const [cant, setCant] = useState(0);
  const [producto, setProducto] = useState({res: {}, isLoaded:false}); //estado actual

//axios para un producto especifico con verificacion de ID
  useEffect(()=>{
    Axios.get(`http://localhost:3001/producto/${props.match.params.id}`)
    .then(data =>{
      if(props.match.params.id && data.data.id){
        setProducto({res:data.data, isLoaded:true});
      }
      })
      .catch(error => 
      console.log(error));
  },[]);
  //uso de datos de forma legible
  const data = producto.res;

  return (
    <div className="producto">
      <Card>
        <Container className="imagen">
          <Carousel clasName="container">
            <Carousel.Item>
              <Image
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
              />
            </Carousel.Item>
          </Carousel>
        </Container>
        <Container className="container2">
          <Card className="card2">
            <Card.Header>
              <h1>{data.nombre}</h1>
            </Card.Header>
            <Card.Body>
              <Card.Title>{props.categorias}</Card.Title>
              <Card.Text>{data.precio}</Card.Text>
              <div className="arribatexto">
                <Card.Text>{data.descripcion}</Card.Text>
              </div>
              <div className="abajotexto">
                <Row>
                  <div>
                  <Card.Text>CANTIDAD: {data.stock}</Card.Text>
                    <Button className="botonCant" onClick={() => setCant(cant + 1)}>+</Button>
                    <Button className="botonCant" onClick={() => setCant(cant - 1)}>-</Button>
                  </div>
                  </Row>
              </div>
            </Card.Body>
            <Card.Footer className="text-muted">
              <Button className="botonRojo">Agregar al Carro</Button>
            </Card.Footer>
          </Card>
        </Container>
      </Card>
    </div>
  );
};

export default Producto;
