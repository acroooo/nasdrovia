import React from "react";
import { useSelector } from "react-redux";
import "./LineaOrdenes.css";
import Encabezado from "./Encabezado/Encabezado";
import Ordenes from "./TitulosOrdenes/TitulosOrdenes";
import Listado from "./Listado/Listado";
import Error404 from "../Error404/error404";
import Axios from "axios";

const LineaOrdenes = () => {
  //-------------------- State Redux------------
  //prettier-ignore
  const usuarioLogin = useSelector(state => state.usuario);

  const [listado, setListado] = useState({ res: null, isLoaded: false })

  useEffect(() => {
    Axios.get("http://localhost:3001/ordenes/")
      .then((ordenes) => {
        console.log(ordenes)
        console.log(ordenes.data)
        setListado({ res: ordenes.data, isLoaded: true })
      })
      .catch((err) => { console.log(err.message) })
  }, [])

  stateHandler = (num) => {
    switch (num) {
      case 1: return "carrito";
      case 2: return "creada";
      case 3: return "procesando";
      case 4: return "cancelada";
      case 5: return "completa";
      default: return num
    }
  }


  if (usuarioLogin.rol === "admin") {
    return (
      <div className="total-ordenes ">
        <div className="container general-ordenes ">
          <Encabezado stateHandler={} />
          <Ordenes />
          <Listado />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Error404 />
    </div>
  );
};

export default LineaOrdenes;
