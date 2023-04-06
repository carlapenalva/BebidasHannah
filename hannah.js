class bebida {
    constructor (id, nombre, precio, img, button) {
        this.id =id;
        this.nombre =nombre;
        this.precio =precio;
        this.img =img;
        this.cantidad =1;

    }
}
const arrayBebidas = []
arrayBebidas.push(new bebida(1, "Fernet branca 450", 1300, "../imagenes/productos/branca450.png"))
arrayBebidas.push(new bebida(2, "Fernet branca 750", 1600, "../imagenes/productos/branca750.png"))
arrayBebidas.push(new bebida(3, "Fernet branca 1LT", 1900, "../imagenes/productos/fernetBranca1lt.png"))
arrayBebidas.push(new bebida(4, "Fernet 1882", 1500, "../imagenes/productos/fernet1882.png"))
arrayBebidas.push(new bebida(5, "Vodka Absolut", 2600, "../imagenes/productos/absolut.png"))
arrayBebidas.push(new bebida(6, "Absolut saborizado",  2900, "../imagenes/productos/absolutSaborizado.png"))
arrayBebidas.push(new bebida(7,"Vodka Smirnoff",  1900, "../imagenes/productos/vodkaSmirnoff.png"))
arrayBebidas.push(new bebida(8,"Smirnoff saborizado", 2100, "../imagenes/productos/smirnoffSaborizado.png"))
arrayBebidas.push(new bebida(9,"Gin Heraclito",  2300, "../imagenes/productos/ginHeraclito.png"))
arrayBebidas.push(new bebida(10,"Gin Gordon's", 2000, "../imagenes/productos/gordond.png"))
arrayBebidas.push(new bebida(11,"Gin Beefeater",  3100, "../imagenes/productos/beefeater.png"))
arrayBebidas.push(new bebida(12,"Campari", 1700, "../imagenes/productos/campari.png"))
arrayBebidas.push(new bebida(13,"Ron Bacardi", 2400, "../imagenes/productos/ronBacardi.png"))
arrayBebidas.push(new bebida(14,"Havana Club", 1700, "../imagenes/productos/havanaClub"))
arrayBebidas.push(new bebida(15,"Malibu", 2100, "../imagenes/productos/malibu.png"))
arrayBebidas.push(new bebida(16,"Red Label", 2800, "../imagenes/productos/redLabel.png"))
arrayBebidas.push(new bebida(17,"Blenders Pride", 5400, "../imagenes/productos/blendersPride.png"))
arrayBebidas.push(new bebida(18,"Chivas", 6700, "../imagenes/productos/chivas.png"))




const listaProductos = document.getElementById("listaProductos");

function cargarProductos() {
 arrayBebidas.forEach (bebida =>{
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    <img src="${bebida.img}" alt="${bebida.nombre}">
    <h2>${bebida.nombre}</h2>
    <h3>$${bebida.precio}</h3>
    <button class="botonCompra" id= "boton${bebida.id}">AGREGAR</button>
    `;
    listaProductos.append(div);

    
    const button = div.querySelector(".botonCompra");
    button.addEventListener("click", () => {
        agregarCarrito(bebida.id);
        mostrarCarrito()
    })    
}) 
}
const carritoCompra= document.getElementById("carrito");
const abrirCarrito= document.getElementById("abrir");

function agregarCarrito(id){
    let productoExistente = false;
    for(let i = 0; i < carrito.length; i++) {
      if(carrito[i].id === id) {
        carrito[i].cantidad++;
        productoExistente = true;
        break;
      }
    }
  
    if(!productoExistente) {
      const productos=arrayBebidas.find(bebida=> bebida.id===id);
      carrito.push(productos);
    }
   
}
carrito = [];
cargarProductos();
if (localStorage.getItem("carrito")){
  carrito=JSON.parse(localStorage.getItem("carrito"));
}
abrirCarrito.addEventListener("click", ()=>{
 carritoCompra.classList.add("visible");
 localStorage.setItem("carrito", JSON.stringify(carrito));
})

function mostrarCarrito() {
    carritoCompra.innerHTML = `
      <button class="cerrarCarrito" id="cerrar">
        <img src="../imagenes/logo/cerrarventana.png" alt="cerrar">
      </button> 
      <h2>Carrito Compras</h2>
      <p class="totalCompra">Total compras: $</p> 
      <button class="vaciarCarrito" id="vaciar">
        <img src="../imagenes/logo/vaciarCompra.png" alt="vaciar">
      </button>
    `;
    const totalCompra = document.querySelector('.totalCompra');
  
    const cerrarCarrito = document.getElementById("cerrar");
    cerrarCarrito.addEventListener("click", () => {
    carritoCompra.classList.remove("visible");
    localStorage.setItem("carrito", JSON.stringify(carrito));
    });


    carrito.forEach(bebida => {
      const div = document.createElement("div");
      div.classList.add("productoCarrito");
      div.innerHTML = `
        <p>${bebida.nombre}</p>
        <p>$${bebida.precio}</p>
        <p>Cantidad: ${bebida.cantidad} 
        <button class="agregar" id="agregar${bebida.id}">
        <img src="../imagenes/logo/agregar.png" alt="agregar">
        </button>
        <button class="quitar" id="quitar${bebida.id}">
        <img src="../imagenes/logo/quitar.png" alt="quitar">
        </button>
        </p>
        <button class="botonEliminar" id="eliminar${bebida.id}">Eliminar</button>
      `;
      carritoCompra.appendChild(div);
      /*localStorage.setItem("carrito", JSON.stringify(carrito));*/
      const boton = document.getElementById(`eliminar${bebida.id}`);
      boton.addEventListener("click", () => {
        eliminarDelCarrito(bebida.id);
      });
  
      function eliminarDelCarrito(id) {
        const producto = carrito.find(bebida => bebida.id === id);
        const indice = carrito.indexOf(producto);
        carrito.splice(indice, 1);
        mostrarCarrito();
      }
      const sumarCantidad= document.querySelector(`#agregar${bebida.id}`);
      sumarCantidad.addEventListener("click",  () =>{
       bebida.cantidad++;
       mostrarCarrito();
      });
      const restarCantidad= document.querySelector(`#quitar${bebida.id}`);
      restarCantidad.addEventListener("click",() =>{
        if (bebida.cantidad>=2){
          bebida.cantidad--;
        }else if (bebida.cantidad=1){
        eliminarDelCarrito();
        }
        mostrarCarrito()
      })
    });
  
    const vaciarCarrito = document.getElementById("vaciar");
    vaciarCarrito.addEventListener("click", () => {
      vaciarElCarrito();
    });
  
    function vaciarElCarrito() {
      carrito = [];
      mostrarCarrito();
    }
  
    function calcularTotal() {
      let totalCompra = 0;
      carrito.forEach(bebida => {
        totalCompra += bebida.precio * bebida.cantidad;
      });
      return totalCompra;
    }
    
    const total = calcularTotal();
    totalCompra.textContent += total;   
    }
 