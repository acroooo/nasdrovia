
const productos = [
    { id: 1, nombre: 'Heineken', descripcion: 'La mejor cerveza del continente', imagen: 'url', stock: '123', precio: 2300 },
    { id: 2, nombre: 'Pilsen', descripcion: 'La mejor cerveza del continente', imagen: 'url', stock: '012', precio: 2300 },
    { id: 3, nombre: 'Corona', descripcion: 'La mejor cerveza del continente', imagen: 'url', stock: '12', precio: 2300 },
    { id: 4, nombre: 'Budweiser', descripcion: 'La mejor cerveza del continente', imagen: 'url', stock: '344', precio: 2300 },
    { id: 5, nombre: 'Aguila', descripcion: 'La mejor cerveza del continente', imagen: 'url', stock: '453', precio: 2300 },
    { id: 6, nombre: 'Poker', descripcion: 'La mejor cerveza del continente', imagen: 'url', stock: '234', precio: 2300 }
]

function ocultarFormulario () {
  const formulario = document.getElementById('form-crud');
  formulario.style.display='none';
}
function motrarFormulario(){
  const formulario = document.getElementById('form-crud');
  formulario.style.display='flex';
  formulario.reset();
}

function editarProducto(setProductoEditar,producto){
  const {id,nombre,descripcion,imagen,stock,precio} = producto;
   setProductoEditar({id,nombre,descripcion,imagen,stock,precio});
   document.getElementById('id').value=id;
   document.getElementById('nombre').value=nombre;
   document.getElementById('descripcion').value=descripcion;
   document.getElementById('imagen').value=imagen;
   document.getElementById('stock').value=stock;
   document.getElementById('precio').value=precio;
   const formulario = document.getElementById('form-crud');
  formulario.style.display='flex';
  
}

export {productos,ocultarFormulario,motrarFormulario,editarProducto};