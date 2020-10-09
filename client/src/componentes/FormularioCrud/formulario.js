
function ocultarFormulario (setCategorias,setProductoEditar,setAccion,setProductoActual) {
  const formulario = document.getElementById('form-crud');
  formulario.style.display='none';
  setCategorias([]);
  setProductoEditar({});
  setProductoActual({});
  setAccion('');
}
function motrarFormulario(setCategorias,setAccion){
  const formulario = document.getElementById('form-crud');
  formulario.style.display='flex';
  formulario.reset();
  setCategorias([]);
  setAccion('crear');

}
function editarProducto(setProductoEditar,producto,setAccion){
  const {id,nombre,descripcion,imagen,stock,precio} = producto;
  const formulario = document.getElementById('form-crud');
   setProductoEditar({id,nombre,descripcion,imagen,stock,precio});
   document.getElementById('id').value=id;
   document.getElementById('nombre').value=nombre;
   document.getElementById('descripcion').value=descripcion;
   document.getElementById('imagen').value=imagen;
   document.getElementById('stock').value=stock;
   document.getElementById('precio').value=precio;
   formulario.style.display='flex';
   setAccion('editar');
}
/* function editarProducto(setProductoEditar,producto,setCategorias,setAccion){
  const {id,nombre,descripcion,imagen,stock,precio,categorias} = producto;
  const formulario = document.getElementById('form-crud');
   setProductoEditar({id,nombre,descripcion,imagen,stock,precio});
   document.getElementById('id').value=id;
   document.getElementById('nombre').value=nombre;
   document.getElementById('descripcion').value=descripcion;
   document.getElementById('imagen').value=imagen;
   document.getElementById('stock').value=stock;
   document.getElementById('precio').value=precio;
   formulario.style.display='flex';
   setCategorias(categorias);
   setAccion('editar');

} */

export {ocultarFormulario,motrarFormulario,editarProducto};

