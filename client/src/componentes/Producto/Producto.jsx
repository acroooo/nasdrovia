import React, {useState, useEffect} from "react";
import "./Producto.css";
import { Card, Carousel, Container, Image, Button, Row, Col } from "react-bootstrap";
import Axios from 'axios';


const Producto = (props) => {
  const [agregar, setAgregar] = useState();
  const [cant, setCant] = useState(0);
  const [stock, setStock] = useState(100);
  const [datos, setDatos] = useState({});

  Axios({
    method: "GET",
    url: "http://localhost:3001/producto/1",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    setDatos(res.data)
  })


  const {nombre} = datos;


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
          <h1 className="titulo text-center">{nombre}</h1>
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

    //     <div className="text-gray-700 body-font overflow-hidden">
    //   <div className="container px-5 py-24 mx-auto">
    //     <div className="lg:w-4/5 mx-auto flex flex-wrap border">
    //       <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 border rounded" src="https://d26lpennugtm8s.cloudfront.net/stores/001/173/096/products/belgian-blonde-ale-1024-frontal1-06da329b1d46f92c5115939085828981-640-0.jpg" />
    //       <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 margen">
    //         <h2 className="text-sm title-font text-black-500 tracking-widest text-2xl">Starke</h2>
    //         <h1 className="text-gray-900 text-5xl title-font font-medium mb-1">{props.nombre}</h1>
    //         <div className="flex mb-4">
    //         </div>
    //         <p className="p">{props.descripcion}</p>
    //         <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
    //           <div className="flex">
    //           </div>
    //           <div className="flex ml-6">
    //             <span className="mr-56">Cantidad</span>
    //             <div className="selector">
    //               <select className="rounded selector border border-gray-400 py-2 focus:outline-none focus:border-indigo-500 text-base pl-3 pr-10">
    //                 <option>x1</option>
    //                 <option>x6</option>
    //                 <option>x12</option>
    //                 <option>x24</option>
    //               </select>
    //               <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
    //                 <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
    //                   <path d="M6 9l6 6 6-6"></path>
    //                 </svg>
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="flex">
    //           <span className="title-font font-medium text-2xl text-gray-900">{props.precio}</span>
    //           <button className="agregar flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Agregar</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Producto;
