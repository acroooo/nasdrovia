import React,{useEffect, useState} from "react";
import Axios from 'axios';


function NewCatForm() {
const [inputValue, setInputValues]= useState({
    id:0, 
    nombre: '',
    descripcion: ''
});
const [inputMessage, setInputMessage] =useState('');
const [inputMessageError, setInputMessageError] =useState('')

        //----Enventos-----//
   const handleInput = event=>{
       if (inputMessage) setInputMessage ('');
       if (inputMessageError) setInputMessageError ('');
       setInputValues({...inputValue, [event.target.name]: event.target.value});
   }

   //----Enviar Formulario ----
   const handleSend = e =>{
    e.preventDefault();
     const {nombre, descripcion}=inputValue;

     if(!nombre || !descripcion){
         return;
     }
    Axios.post('http://localhost:3001/categorias', {nombre,descripcion})
    .then(() =>console.log('envido'))
    .catch(() =>console.log('error')) 
   }

   //-------Editar Formulario------
   const handleEdit= event =>{};


   
   //-------Eliminar Formulario------
   const handleDelete= event =>{}


    return (
        <div class="container">
            <form onSubmit={handleSend}>
                <div class="form-group">
                    <label htmlFor="Categoria">Nombre:</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    name="nombre"
                    id="exampleFormControlInput1" 
                    placeholder="Ingrese un nombre para su categoria" 
                    
                    onChange={handleInput}
                    />
                </div>
                <div class="form-group">
                    <label htmlFor="descripcion">Descripción:</label>
                    <textarea 
                    class="form-control" 
                    id="descripcion" 
                    rows="2" 
                    name="descripcion"
                   
                    placeholder="Ingrese una descripción breve"
                    onChange={handleInput}
                    >

                    </textarea>
                </div>
                <button type="submit" class="btn btn-outline-danger" >Enviar</button>
            </form>
            <div>
             
                <button type="button" class="btn btn-outline-danger" onClick={handleEdit}>Editar</button>
                <button type="button" class="btn btn-outline-danger" onClick={handleDelete}>Eliminar</button>
            </div>
        </div>)
};

export default NewCatForm;