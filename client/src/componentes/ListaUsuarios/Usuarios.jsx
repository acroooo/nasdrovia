import React, { useEffect, useState } from 'react';
import Encabezado from './Encabezado';
import Titulos from './Titulos';
import Listado from './Listado';
import './Usuarios.css';
import Axios from 'axios';


const ListaUsuarios = () => {

    const [users, setUsers] = useState({ res: null, isLoaded: false })
    const [flag, setFlag] = useState(false)

    const mostrar = () => {
        Axios.get("http://localhost:3001/usuario/")
            .then(respuesta => {
                setUsers({ res: respuesta.data, isLoaded: true })
            })
            .catch(err => {
                console.log(err.message)
                setUsers({ res: null, isLoaded: false })
            })
    }

    useEffect(() => {
        mostrar()
        setFlag(false)
    }, [flag])


    return (
        <div className='total listado-usuarios '>
            <div className='container general '>
                <Encabezado usuarios={users} setFlag={setFlag} />
                <Titulos />
                <Listado usuarios={users} />
            </div>
        </div>
    );
}

export default ListaUsuarios;