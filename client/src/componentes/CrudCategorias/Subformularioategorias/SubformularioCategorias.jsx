import React,{useState} from 'react';
import './SubformularioCategoria.css';
import axios from 'axios';


const SubformularioCategoria = ({accion,setAccion,editar,crear,eliminar,catCrear,catEditar}) => {

    //Error al validar el formulario
    const [error,setError]=useState(false);
    
    //Extrae los datos de la categoria que toca editar del state para ponerlos en el formulario al editar
    const {id,nombre,descripcion} = catEditar;

    //Indica el valor del id de la categoria dependiendo de la acción (crear-editar);
    let valor = accion==='editar'? id : null;
   
    //Cierra el formulario y reinicia los states de crear,editar,eliminar y acción (catCrear es la categoria que se pretende crear y crear la accion que la guarda en el state)
    const cerrarFormulario = ()=>{
        editar({});crear({});
        eliminar({});setAccion('')
        setError(false);
    }

    //Almacena la categoria en el state en el state correspondiente según la acción seleccionada
    const almacenarCategoriaState =e=>{
        accion === 'editar' &&  editar({...catEditar,[e.target.name]:e.target.value});
        accion === 'crear' &&  crear({...catCrear,[e.target.name]:e.target.value});
    }

    //Enviar elformulario
    const handleSubmit = e=>{
        e.preventDefault();

        //Obtener los datos de la categoria del state dependiendo de la accion a ejecutar
        const{id,nombre,descripcion} = accion==='editar' ? catEditar : catCrear; 

         //Validar si los campos están vacios y cortar la ejecución en caso de ser así
         if(!id || !nombre || !descripcion){
            return setError(true);
         }
          setError(false);

          //Ejecutar request axios
         switch(accion){
             case 'crear': axios.post('http://localhost:3001/categorias', {nombre,descripcion})
             .then(() =>console.log('envido')).catch(() =>console.log('error')) 
             break;
         }
          


          //Mostrar mensaje de exito
          document.getElementById('exito-categoria').style.display='block';
    }




    return accion==='editar' || accion==='crear' ? (
        <form className="formulario-categorias-crud  flex-column mx-auto" id='form-crud' onSubmit={handleSubmit}>
            <h4 className="d-flex align-items-center justify-content-between mb-3">
           {accion ==='editar' ? 'Editar':'Crear'} Categoría <small id="cerrar" className="font-weight-bold" onClick={cerrarFormulario}>X</small> </h4>
           {error && <p className="error-producto text-white text-center" id='error-producto'> Todos los campos son obligatorios </p>} 
            <label className="mb-1" >Código</label>
            <input
                name='id'
                type="number"
                id='id-categoria'
                onChange={almacenarCategoriaState}
            
                value={id}
            />
            <label className="mb-1">Nombre</label>
            <input
                name='nombre'
                type="text"
                id='nombre-categoria'
                onChange={almacenarCategoriaState}
                value={nombre}
            />
            <label className="mb-1">Descripción</label>
            <textarea name='descripcion'id='descripcion-categoria' onChange={almacenarCategoriaState} value={descripcion}>
            </textarea>
            <p className="exito-categoria text-white text-center mt-1 mb-0" id='exito-categoria'> {accion==='editar' ? 'Categoría modificada con exito' :'La categoría se ha guardado correctamente'} </p>
    
            <button className='btn-gproducto text-white mt-2' >Guardar</button>
        </form>

    ):null;
}

export default SubformularioCategoria;