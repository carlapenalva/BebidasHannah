const productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));
console.log(productosEnCarrito);
const contenedorCarritoVacio = document.getElementById("carritoVacio");
const contenedorCarritoProductos = document.getElementById(
  "contenedorCarritoProductos"
);

if (productosEnCarrito) {
  contenedorCarritoVacio.classList.add("disabled");
} else {
}
