
const productos = [
    { id: 1, nombre: 'Heineken', descripcion: 'La mejor cerveza del continente', imagen: 'url', stock: 'cervezas', precio: 2300 },
    { id: 2, nombre: 'Pilsen', descripcion: 'La mejor cerveza del continente', imagen: 'url', stock: 'cervezas', precio: 2300 },
    { id: 3, nombre: 'Corona', descripcion: 'La mejor cerveza del continente', imagen: 'url', stock: 'cervezas', precio: 2300 },
    { id: 4, nombre: 'Budweiser', descripcion: 'La mejor cerveza del continente', imagen: 'url', stock: 'cervezas', precio: 2300 },
    { id: 5, nombre: 'Aguila', descripcion: 'La mejor cerveza del continente', imagen: 'url', stock: 'cervezas', precio: 2300 },
    { id: 6, nombre: 'Poker', descripcion: 'La mejor cerveza del continente', imagen: 'url', stock: 'cervezas', precio: 2300 }
]

function toggleModal () {
  const body = document.querySelector('body')
  const modal = document.querySelector('.modal')
  modal.classList.toggle('opacity-0')
  modal.classList.toggle('pointer-events-none')
  body.classList.toggle('modal-active')
}
function editar(setProducto,producto){
  const {id,nombre,descripcion,imagen,stock,precio} = producto;
   setProducto({id,nombre,descripcion,imagen,stock,precio});
   document.getElementById('id').value=id;
   document.getElementById('nombre').value=nombre;
   document.getElementById('descripcion').value=descripcion;
   document.getElementById('imagen').value=imagen;
   document.getElementById('stock').value=stock;
   document.getElementById('precio').value=precio;
   toggleModal();
}

function nuevoProducto(){
   document.getElementById('id').value='';
   document.getElementById('nombre').value='';
   document.getElementById('descripcion').value='';
   document.getElementById('imagen').value='';
   document.getElementById('stock').value='';
   document.getElementById('precio').value='';
   toggleModal();
}


export {productos,toggleModal,editar,nuevoProducto};