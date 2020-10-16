import React, { useState} from 'react'
import './Crud.css';
import Spinner from './Spinner';
import axios from 'axios';


const Crud = ({ accion, setAccion, setProductoEditar, productoEditar, setProductoCrear, productoCrear, setSolicitud, categorias,n,cats,setCats }) => {

    const [error, setError] = useState(false);//Se activa si hay un error en la validación del formulario
    const [exito, setExito] = useState(false);//Se activa si hay exito en la validación del formulario
    const [spinner, setSpinner] = useState(false);//Spinner que se muestra después de ejecutar con exito el método axios
    const [catsEliminar,setCatsEliminar]=useState([]);//Ids con las categorias que toca eliminar de un producto
    const [numImagenes,setNumImagenes]=useState(0);
    const [urls,setUrls]=useState({});

    //Almacena el número de imagnes que va a tener el producto
    const almacenarImagenes = num=>{
        setNumImagenes(parseInt(num));
        setUrls({});
    }

    //Alamacena las urls de las imagenes con sus respectivo id
    const almacenarUlrs = e=>{
        setUrls({...urls,[e.target.name]:e.target.value})
        console.log(e.target.value)
    }
   
     

    //almacenar categorias del producto en el state para luego postearlas o editarlas
    const almacenarCategoria = categoria=>{
        if(categoria){
            const buscarCategoria = cats.find(c=>c.categoria===categoria);//Buscar si la categoria seleccionada ya existe en el state del producto (cats)
            const id = categorias.res.find(element=>element.nombre===categoria).id; //Busca el id de la categoria añadida en el state de todas las categorias que viene de la base de datos
            if(!buscarCategoria){ //comprueba que la agregue al state si no está en el mismo
                setCats([...cats,{categoria,id}]);
            }
        }
    }
    
    //eliminar categorias de un producto del state antes de postearlo o editarlo
    const eliminarCategoria= (nombre,id)=>{
      const cate = cats.filter(c=>c.categoria!==nombre);
      setCats(cate);
      setCatsEliminar([...catsEliminar,id]);
      let select = document.getElementById('select-categorias');
      select.value= cats.length===0 && 'Selecciona una categoría' ; 
    }
    
    //Datos del producto que se va a editar
    const { id, nombre, descripcion, precio, stock, imagen,categories } = productoEditar;

    //Guarda el producto editado o creado en el state según sea el caso
    const almacenarProductoEditado = e => {
        accion === 'editar' && setProductoEditar({ ...productoEditar, [e.target.name]: e.target.value});
        accion === 'crear' && setProductoCrear({ ...productoCrear,id:n+1, [e.target.name]: e.target.value });
    }
    
  let j=3;
    //Cierra el formulario y borrar el producto editado O creado del state
    const cerrarFormulario = () => {
        setProductoEditar({}); setProductoCrear({});
        setAccion(''); setError(false); setSpinner(false);
        setCats([]);
    }

    //Enviar el formulario para crear o editar un producto
    const handleSubmit = e => {
        e.preventDefault();
        //Obtener los datos del producto del state dependiendo de la accion a ejecutar
        const { id, nombre, descripcion, precio, stock, imagen } = accion === 'editar' ? productoEditar : productoCrear;
        

        //Validar si los campos están vacios
         if (!nombre || !descripcion || !precio || !stock || !imagen || !cats.length) {
          return setError(true);
            
        }
        setError(false); 

        //Ejecutar  axios
        switch (accion) {
           case 'crear': axios.post('http://localhost:3001/producto', {nombre, descripcion, precio, stock, imagen})
                .then(()=>cats.forEach((cat)=>{
                    axios.post(`http://localhost:3001/producto/${id}/categoria/${cat.id}`);
                    setCats([])}))
                 .then(() => console.log('publicado'))
                 .catch((err) => console.log(err))
            break; 
            
             case 'editar': axios.put(`http://localhost:3001/producto/${id}`, { nombre, descripcion, precio, stock, imagen})
            .then(()=>{
                catsEliminar.length>0 && catsEliminar.forEach(n=>axios.delete((`http://localhost:3001/producto/${id}/categoria/${n}`)));
                cats.length>0 &&cats.forEach(cat=>axios.post(`http://localhost:3001/producto/${id}/categoria/${cat.id}`));
                setCatsEliminar([]);setCats([]);
            })
            .catch(() => console.log('error')) 
                break;
            default:return;
        } 

        //Mostrar spinner de carga
        setSpinner(true);

        //Mostrar mensaje de exito, eliminar spinner, cerrar y ressetear el formulario y el state.
        setTimeout(() => {
            setSpinner(false);
            setExito(true);
            setTimeout(() => { setExito(false);setAccion('')}, 1000)
            setTimeout(() => setSolicitud(true), 1100)
        }, 1400)
    }
    //Función que convierte la primera letra de una palabra en mayuscula
    const mayuscula=palabra=>palabra[0].toUpperCase()+palabra.slice(1);
 
    return accion === 'editar' || accion === 'crear' ? (
        <form className="formulario-producto-crud  flex-column mx-auto" id='form-crud' onSubmit={handleSubmit}>
            <h4 className="d-flex align-items-center justify-content-between mb-3">
                {accion === 'editar' ? 'Editar' : 'Crear'} Producto <small id="cerrar" className="font-weight-bold" onClick={cerrarFormulario}>X</small> </h4>
            {error && <p className="error-producto text-white text-center" id='error-producto'> Todos los campos son obligatorios </p>}
            <label className="mb-1 " >Código</label>
            <input
                name='id'
                type="number"
                value={accion === 'editar'?id:n+1}
                disabled
            />
            <label className="mb-1">Nombre</label>
            <input
                name='nombre'
                type="text"
                id='nombre'
                onChange={almacenarProductoEditado}
                value={nombre}
            />
            <label className="mb-1">Descripción</label>
            <textarea
                name='descripcion'
                id='descripcion'
                onChange={almacenarProductoEditado}
                value={descripcion}
            >
            </textarea>
          {/*   <select className='mb-2' onChange={e=>almacenarImagenes(e.target.value)}>
                <option value="">Selecciona el numero de imagenes</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>  */}
        {/*   {numImagenes===1 && (<div>
              <label className="mb-1 w-100">Imagen 1</label>
             <input className='w-100' name='1' onChange={e=>almacenarUlrs(e)}/> 
             </div>
          )}

          {numImagenes===2 && (
              <div>
                  <label className="mb-1 w-100">Imagen 1</label>
                   <input className='w-100'name='1' onChange={e=>almacenarUlrs(e)} />
                   <label className="mb-1 w-100">Imagen 2</label>
                   <input className='w-100' name='2' onChange={e=>almacenarUlrs(e)}/>
              </div>
          )}

          {numImagenes===3 && (
              <div>
                   <label className="mb-1 w-100">Imagen 1</label>
                   <input className='w-100' name='1' onChange={e=>almacenarUlrs(e)}/>
                   <label className="mb-1 w-100">Imagen 2</label>
                   <input className='w-100' name='2' onChange={e=>almacenarUlrs(e)}/>
                   <label className="mb-1 w-100">Imagen 3</label>
                   <input className='w-100' name='3' onChange={e=>almacenarUlrs(e)}/>
              </div>
          )} */}


           
             <label className="mb-1">Imagen</label>
            <input
                name='imagen'
                type="text"
                id='imagen'
                onChange={almacenarProductoEditado}
                value={imagen}
            />  

            <label className="mb-1">Stock</label>
            <input
                name='stock'
                type="number"
                id='stock'
                onChange={almacenarProductoEditado}
                value={stock}
            />
            <label className="mb-1">Categoria </label>
            <select id="select-categorias" onChange={(e)=>almacenarCategoria(e.target.value)}>
            <option value='' id='actual' >Selecciona {cats.length>0 ? 'otra':'una'} categoria</option>
              {categorias.res.map((el,i)=>
            <option value={el.nombre}key={`categorias${i}`}> {mayuscula(el.nombre)}</option>
             )}
            </select>
            {/* Contenedor que muestras las categorias del producto actual */}
            <div className="d-flex flex-wrap" id='cont-categorias'>
            {cats.length>0 && cats.map(categoria =><small className="cat-btn mr-1 text-white mb-1 mt-2" key={Math.random()}>{mayuscula(categoria.categoria)}<i className="fas fa-times ml-1" onClick={()=>eliminarCategoria(categoria.categoria,categoria.id)}></i></small>)}  
            </div>

            <label className="mb-1" >Precio</label>
            <input name='precio' type="number"  onChange={almacenarProductoEditado} value={precio} />
            {exito && <p className="exito-categoria  text-center mt-1 mb-0" id='exito-categoria'>{accion === 'editar'
                ? (<span>El producto se ha modificado<i className="fas fa-check"></i></span>)
                : (<span>El producto se ha guardado<i className="fas fa-check"></i></span>)}</p>}
            {spinner && <Spinner />}
            <button className='btn-gproducto text-white mt-2' >Guardar</button>
        </form>
    ) : null;
}

export default Crud;