import React from 'react';
import Encabezado from './Encabezado';
import Titulos from './Titulos';
import Listado from './Listado';
import './Usuarios.css';

const ListaUsuarios = () => {

    const listadoUsuarios= [
        {id:1,nombre:'Andrés',correo:'Andres@andres.com',rol:'admin'},
        {id:2,nombre:'Lis',correo:'Lis@Lis.com',rol:'admin'},
        {id:3,nombre:'Ale',correo:'Ale@Ale.com',rol:'admin'},
        {id:4,nombre:'Felipe',correo:'Felipe@Felipe.com',rol:'admin'},
        {id:5,nombre:'Hernán',correo:'Hernán@Hernán.com',rol:'admin'},
        {id:6,nombre:'Hernán 2',correo:'Hernán2@Hernán.com',rol:'admin'},
    ]


    return ( 
        <div className='total listado-usuarios '>
        <div className='container general '>
           <Encabezado/>
           <Titulos/>
           <Listado usuarios={listadoUsuarios}/>
        </div>
    </div>
     );
}
 
export default ListaUsuarios;