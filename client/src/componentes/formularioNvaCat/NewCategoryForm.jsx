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
   const handleSend = event =>{
       const {nombre, descripcion}=inputValue;
       event.preventDefault();

       if (!nombre || !descripcion)
       Axios.post('http://localhost:3001/categorias', {...inputValue, id: null})
       .then(() =>{
            setInputMessage('Su categoria se ha agregado con exito!')
       })
       .catch(error =>setInputMessageError('Su categoria no ha sido creada!' + error)
       )
   }

   //-------Editar Formulario------
   const handleEdit= event =>{};


   
   //-------Eliminar Formulario------
   const handleDelete= event =>{}


    return (
        <div class="container">
            <form>
                <div class="form-group">
                    <label for="Categoria">Nombre:</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    name="nombre"
                    id="exampleFormControlInput1" 
                    placeholder="Ingrese un nombre para su categoria" 
                    value={input.nombre}
                    onChange={handleInput}
                    />
                </div>
                <div class="form-group">
                    <label for="descripcion">Descripción:</label>
                    <textarea 
                    class="form-control" 
                    id="descripcion" 
                    rows="2" 
                    name="descripcion"
                    value={inputValue.descripcion}
                    placeholder="Ingrese una descripción breve"
                    onChange={handleInput}
                    >

                    </textarea>
                </div>
            </form>
            <div>
                <button type="submit" class="btn btn-outline-danger" onClick={handleSend}>Enviar</button>
                <button type="button" class="btn btn-outline-danger" onClick={handleEdit}>Editar</button>
                <button type="button" class="btn btn-outline-danger" onClick={handleDelete}>Eliminar</button>
            </div>
        </div>)
};

export default NewCatForm;