const productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));

/*document.addEventListener("DOMContentLoaded", function mostrarCarrito() {*/
/*const productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));*/
function mostrarCarrito() {
  let productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));
  console.log(productosEnCarrito);
  const contenedorCarritoVacio = document.getElementById("carritoVacio");
  const contenedorCarritoProductos = document.getElementById(
    "contenedorCarritoProductos"
  );

  if (productosEnCarrito) {
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disable");
    contenedorCarritoProductos.innerHTML = "";
    productosEnCarrito.forEach((producto) => {
      const div = document.createElement("div");
      div.classList.add("productoCarrito");
      div.innerHTML = `
      <img src="${producto.img}" class="imgCarrito">
      <p>${producto.nombre}</p>
      <p>$${producto.precio}</p>
      <p>Cantidad: ${producto.cantidad} </p>
      <div>
      <button class="agregar" id="agregar${producto.id}">
      <img src="../imagenes/carrito/agregar.png" alt="agregar">
      </button>
      <button class="quitar" id="quitar${producto.id}">
      <img src="../imagenes/carrito/quitar.png" alt="quitar" >
      </button>
      </div>
      <button class="botonEliminar" id="eliminar${producto.id}">Eliminar</button>
    `;
      contenedorCarritoProductos.appendChild(div);
      const boton = document.getElementById(`eliminar${producto.id}`);
      boton.addEventListener("click", () => {
        eliminarDelCarrito(producto.id, productosEnCarrito);
      });
      const sumarCantidad = document.querySelector(`#agregar${producto.id}`);
      sumarCantidad.addEventListener("click", () => {
        producto.cantidad++;
        localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
        mostrarCarrito();
      });

      const restarCantidad = document.querySelector(`#quitar${producto.id}`);
      restarCantidad.addEventListener("click", () => {
        if (producto.cantidad >= 2) {
          producto.cantidad--;
        } else if ((producto.cantidad = 1)) {
          eliminarDelCarrito();
        }
        localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
        mostrarCarrito();
      });

      /*const vaciarCarrito = document.getElementById("vaciar");
vaciarCarrito.addEventListener("click", () => {
  vaciarElCarrito();
});

function vaciarElCarrito() {
  carrito = [];
  mostrarCarrito();
} CUANDO VACIE EL CARRITO LO QUE TENGO QUE HACER ES VOLVER A HACER QUE SE MUESTRE EL EMPIEZA TU CARRITO DE COMPRAS CONTENEDOR CARRITO VACIO REMOVE DISABLE*/
    });
  }
}
function eliminarDelCarrito(id, productosEnCarrito) {
  const bebida = productosEnCarrito.find((producto) => producto.id === id);
  const indice = productosEnCarrito.indexOf(bebida);
  productosEnCarrito.splice(indice, 1);
  localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
  mostrarCarrito();
}
mostrarCarrito();
