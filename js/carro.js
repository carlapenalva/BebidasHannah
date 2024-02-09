const productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));

/*const contenedorCarritoVacio = document.getElementById("carritoVacio");

if (productosEnCarrito) {
  console.log(productosEnCarrito);
  contenedorCarritoVacio.classList.add("disabled");
}*/
document.addEventListener("DOMContentLoaded", function () {
  const productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));
  console.log(productosEnCarrito);
  const contenedorCarritoVacio = document.getElementById("carritoVacio");
  const contenedorCarritoProductos = document.getElementById(
    "contenedorCarritoProductos"
  );

  if (productosEnCarrito) {
    contenedorCarritoVacio.classList.add("disabled");
  }
});
