import React, {useState, useEffect} from "react";
import "./Producto.css";
import { Card, Carousel, Container, Image, Button, Row} from "react-bootstrap";
import Axios from 'axios';


const Producto = (props) => {
  const [cant, setCant] = useState(0);
  const [datos, setDatos] = useState({res: null, isLoaded: false});

    useEffect((res) => {
      Axios({
        method: "GET",
        url: "http://localhost:3001/producto/1",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => {
        setDatos({res: res.data, isLoaded: true})
      })
  }, []);

  const {nombre} = datos.res

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
          <h1 className="titulo text-center">{}</h1>
          <Card className="card2">
            <Card.Header>
              <h2>{props.tipo}</h2>
            </Card.Header>
            <Card.Body>
              <Card.Title>{props.categorias}</Card.Title>
              <div className="arribatexto">
                <Card.Text>{props.descripcion}</Card.Text>
              </div>
              <div className="abajotexto">
                <Row>
                  <div>
                  <Card.Text>CANTIDAD: {cant}</Card.Text>
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
