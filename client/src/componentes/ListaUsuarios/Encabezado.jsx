import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Modal, Button } from "react-bootstrap";



const Encabezado = (props) => {

    const [show, setShow] = useState(false);
    const [user, setUser] = useState()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const selected = (id) => {
        setUser(id)
    }

    const promover = () => {
        Axios.post(`http://localhost:3001/auth/promote/${user}`)
            .then(res => console.log(res))
            .catch(err => console.log(err.message))
        handleClose()
        props.setFlag(true)
        alert("succes!")
    }

    return (
        <div className="row align-items-center ">
            <div
                className="encabezado col-12  d-flex justify-content-between m-0  align-items-center py-2 mb-1 mx-auto">
                <h4 className="titulo-lista text-white m-0 pb-1">Listado de Usuarios</h4>
            </div>

            <div className="encabezado col-12 d-flex align-items-center py-2 mb-1 mx-auto">
                <div className="grupo-header d-flex align-items-center mr-2 mr-md-4">
                    <p className="titulo-pro m-0 text-white mr-2">Código:</p>
                    <input type="text" placeholder="Código" />
                </div>
                <div className="grupo-header d-flex align-items-center  mr-2 mr-md-4">
                    <p className="titulo-pro m-0 text-white mr-2">Nombre:</p>
                    <input type="text" placeholder="Nombre" />
                </div>
                <button className="btn-buscar text-white py-0 py-md-1 px-2  px-md-2"><i className="fas fa-search mr-1 mr-md-2"></i>Buscar</button>
                <button type="button" class="btn btn-danger mr-1 mr-md-2 mx-auto" onClick={handleShow}>
                    promover un usuario
                </button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>promover usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Seleccione el usuario que desea promover a Admin</p>
                    <select name="usuario" id="1" onChange={(e) => selected(e.target.value)}>
                        <option selected="0">seleccionar...</option>
                        {props.usuarios.res !== null ? props.usuarios.res.map(usuario => {
                            const { id, nombre, rol } = usuario;
                            if (rol !== "admin") {
                                return (
                                    <option value={id} key={id}>{nombre}</option>
                                )
                            }
                            else return

                        }) : <option value={null}>cargando...</option>}
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        salir
                    </Button>
                    <Button variant="danger" onClick={promover}>
                        promover
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Encabezado;