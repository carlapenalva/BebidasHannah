const productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));

document.addEventListener("DOMContentLoaded", function () {
  const productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));
  console.log(productosEnCarrito);
  const contenedorCarritoVacio = document.getElementById("carritoVacio");
  const contenedorCarritoProductos = document.getElementById(
    "contenedorCarritoProductos"
  );

  if (productosEnCarrito) {
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disable");
    productosEnCarrito.forEach((producto) => {
      const div = document.createElement("div");
      div.classList.add("productoCarrito");
      div.innerHTML = `
      <img src="${producto.img}" class="imgCarrito">
      <p>${producto.nombre}</p>
      <p>$${producto.precio}</p>
      <p>Cantidad: ${producto.cantidad} 
      <button class="agregar" id="agregar${producto.id}">
      <img src="../imagenes/carrito/agregar.png" alt="agregar">
      </button>
      <button class="quitar" id="quitar${producto.id}">
      <img src="../imagenes/carrito/quitar.png" alt="quitar" >
      </button>
      </p>
      <button class="botonEliminar" id="eliminar${producto.id}">Eliminar</button>
    `;
      contenedorCarritoProductos.appendChild(div);
      const boton = document.getElementById(`eliminar${producto.id}`);
      boton.addEventListener("click", () => {
        eliminarDelCarrito(producto.id);
      });
    });
  }
});
function eliminarDelCarrito(id) {
  const bebida = productosEnCarrito.find((producto) => producto.id === id);
  const indice = productosEnCarrito.indexOf(bebida);
  productosEnCarrito.splice(indice, 1);
}
