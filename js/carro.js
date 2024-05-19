const productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));

function mostrarCarrito() {
  let productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));
  console.log(productosEnCarrito);
  const contenedorCarritoVacio = document.getElementById("carritoVacio");
  const contenedorCarritoProductos = document.getElementById(
    "contenedorCarritoProductos"
  );

  if (productosEnCarrito) {
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoProductos.innerHTML = "";
    productosEnCarrito.forEach((producto) => {
      const div = document.createElement("div");
      div.classList.add("productoCarrito");
      div.innerHTML = `
      <div>
        <img src="${producto.img}" class="imgCarrito"> 
      </div>
      <div class="infProducto">
        <p>${producto.nombre}</p>
        <p>$${producto.precio}</p>
        <div class="cantidad">
        <p>Cantidad: ${producto.cantidad} </p>
        <button class="agregar" id="agregar${producto.id}">
        <img src="../imagenes/carrito/agregar.png" alt="agregar">
        </button>
        <button class="quitar" id="quitar${producto.id}">
        <img src="../imagenes/carrito/quitar.png" alt="quitar" >
        </button>
        </div>
        <button class="botonEliminar" id="eliminar${producto.id}">Eliminar</button>
      </div>
      
    `;
      contenedorCarritoProductos.appendChild(div);
      const boton = document.getElementById(`eliminar${producto.id}`);
      boton.addEventListener("click", () => {
        eliminarDelCarrito(producto.id, productosEnCarrito);
        Toastify({
          text: "Producto eliminado",
          duration: "2000",
          style: {
            background: "#e3e3e7",
            color: "#321d58",
          },
        }).showToast();
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
          eliminarDelCarrito(producto.id, productosEnCarrito);
        }
        localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
        mostrarCarrito();
      });
    });
  } else {
    contenedorCarritoVacio.classList.remove("disabled");
    contenedorCarritoProductos.classList.add("disabled");
  }
  const resumenVacio = document.getElementById("resumenVacio");
  const totalCompra = document.getElementById("totalCompra");
  let total = 0;
  if (productosEnCarrito) {
    productosEnCarrito.forEach((producto) => {
      total += producto.precio * producto.cantidad;
    });
  }
  totalCompra.innerHTML = `<h2>Resumen compra</h2> <h3> Total: $${total}</h3> <button id="vaciarCarrito">Vaciar Carrito</button>`;
  if (productosEnCarrito && productosEnCarrito.length > 0) {
    resumenVacio.classList.remove("visible");
    resumenVacio.classList.add("disabled");
    totalCompra.classList.remove("disabled");
  } else {
    resumenVacio.classList.remove("disabled");
    resumenVacio.classList.add("visible");
    totalCompra.classList.add("disabled");
  }

  const vaciarCarritoBtn = document.getElementById("vaciarCarrito");
  vaciarCarritoBtn.addEventListener("click", () => {
    vaciarCarrito();
  });
}
function vaciarCarrito() {
  localStorage.removeItem("carrito");
  contenedorCarritoProductos.innerHTML = "";
  mostrarCarrito();
}
function eliminarDelCarrito(id, productosEnCarrito) {
  const bebida = productosEnCarrito.find((producto) => producto.id === id);
  const indice = productosEnCarrito.indexOf(bebida);
  productosEnCarrito.splice(indice, 1);
  localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
  if (productosEnCarrito.length === 0) {
    vaciarCarrito();
  } else {
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
  }
  mostrarCarrito();
}
mostrarCarrito();
