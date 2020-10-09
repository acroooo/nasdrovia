
const productos = [
    { id: 1, nombre: 'Heineken', descripcion: 'La mejor cerveza del continente', imagen: 'url', stock: '123', precio: 2300,categorias:['artesanal','europea'] },
    { id: 2, nombre: 'Pilsen', descripcion: 'La mejor cerveza del continente', imagen: 'url', stock: '012', precio: 2300,categorias:['artesanal','europea'] },
    { id: 3, nombre: 'Corona', descripcion: 'La mejor cerveza del continente', imagen: 'url', stock: '12', precio: 2300,categorias:['colombiana','europea'] },
    { id: 4, nombre: 'Budweiser', descripcion: 'La mejor cerveza del continente', imagen: 'url', stock: '344', precio: 2300,categorias:['artesanal','europea'] },
    { id: 5, nombre: 'Aguila', descripcion: 'La mejor cerveza del continente', imagen: 'url', stock: '453', precio: 2300,categorias:['artesanal','europea'] },
    { id: 6, nombre: 'Poker', descripcion: 'La mejor cerveza del continente', imagen: 'url', stock: '234', precio: 2300,categorias:['artesanal','europea'] }
]

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

export {productos,ocultarFormulario,motrarFormulario,editarProducto};

