class Bebida {
  constructor(id, nombre, precio, img, button) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.cantidad = 1;
  }
}
const arrayBebidas = [];
arrayBebidas.push(
  new Bebida(
    1,
    "Fernet branca 450",
    1300,
    "../imagenes/productos/branca450.png"
  )
);
arrayBebidas.push(
  new Bebida(
    2,
    "Fernet branca 750",
    1600,
    "../imagenes/productos/branca750.png"
  )
);
arrayBebidas.push(
  new Bebida(
    3,
    "Fernet branca 1LT",
    1900,
    "../imagenes/productos/fernetBranca1lt.png"
  )
);
arrayBebidas.push(
  new Bebida(4, "Fernet 1882", 1500, "../imagenes/productos/fernet1882.png")
);
arrayBebidas.push(
  new Bebida(5, "Vodka Absolut", 2600, "../imagenes/productos/absolut.png")
);
arrayBebidas.push(
  new Bebida(
    6,
    "Absolut saborizado",
    2900,
    "../imagenes/productos/absolutSaborizado.png"
  )
);
arrayBebidas.push(
  new Bebida(
    7,
    "Vodka Smirnoff",
    1900,
    "../imagenes/productos/vodkaSmirnoff.png"
  )
);
arrayBebidas.push(
  new Bebida(
    8,
    "Smirnoff saborizado",
    2100,
    "../imagenes/productos/smirnoffSaborizado.png"
  )
);
arrayBebidas.push(
  new Bebida(9, "Gin Heraclito", 2300, "../imagenes/productos/ginHeraclito.png")
);
arrayBebidas.push(
  new Bebida(10, "Gin Gordon's", 2000, "../imagenes/productos/gordond.png")
);
arrayBebidas.push(
  new Bebida(11, "Gin Beefeater", 3100, "../imagenes/productos/beefeater.png")
);
arrayBebidas.push(
  new Bebida(12, "Campari", 1700, "../imagenes/productos/campari.png")
);
arrayBebidas.push(
  new Bebida(13, "Ron Bacardi", 2400, "../imagenes/productos/ronBacardi.png")
);
arrayBebidas.push(
  new Bebida(14, "Havana Club", 1700, "../imagenes/productos/havanaClub")
);
arrayBebidas.push(
  new Bebida(15, "Malibu", 2100, "../imagenes/productos/malibu.png")
);
arrayBebidas.push(
  new Bebida(16, "Red Label", 2800, "../imagenes/productos/redLabel.png")
);
arrayBebidas.push(
  new Bebida(
    17,
    "Blenders Pride",
    5400,
    "../imagenes/productos/blendersPride.png"
  )
);
arrayBebidas.push(
  new Bebida(18, "Chivas", 6700, "../imagenes/productos/chivas.png")
);

const listaProductos = document.getElementById("listaProductos");

function cargarProductos() {
  arrayBebidas.forEach((bebida) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img src="${bebida.img}" alt="${bebida.nombre}">
      <hr/>
      <h2>${bebida.nombre}</h2>
      <h3>$${bebida.precio}</h3>
      <button class="botonCompra" id= "boton${bebida.id}">AGREGAR</button>
      `;
    listaProductos.appendChild(div);

    const button = div.querySelector(".botonCompra");
    button.addEventListener("click", () => {
      agregarCarrito(bebida.id);
    });
  });
}

cargarProductos();
let carrito;
const productosEnCarritoLS = JSON.parse(localStorage.getItem("carrito"));
if (productosEnCarritoLS) {
  carrito = productosEnCarritoLS;
} else {
  carrito = [];
}

function agregarCarrito(id) {
  let productoExistente = false;
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].id === id) {
      carrito[i].cantidad++;
      productoExistente = true;
      break;
    }
  }
  if (!productoExistente) {
    const producto = arrayBebidas.find((bebida) => bebida.id === id);
    carrito.push(producto);
    Swal.fire({
      title: "Producto agregado al carrito",
      text: "¿Qué deseas hacer ahora?",
      icon: "success",
      showCancelButton: true,
      confirmButtonText: "Seguir comprando",
      cancelButtonText: "Ir al carrito",
      customClass: {
        confirmButton: "swal-btn-confirm",
        cancelButton: "swal-btn-cancel",
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.cancel) {
        // Redirigir al carrito si elige "Ir al carrito"
        window.location.href = "../secciones/carrito.html";
      }
    });
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

let buscador = document.getElementById("buscador");

buscador.addEventListener("input", (event) => {
  listaProductos.innerHTML = "";
  const textoBusqueda = event.target.value.toLowerCase();
  const productosFiltrados = arrayBebidas.filter((bebida) => {
    // Convertir el nombre de la bebida a minúsculas y verificar si incluye el texto de búsqueda
    return bebida.nombre.toLowerCase().includes(textoBusqueda);
  });
  // Iterar sobre los productos filtrados y agregarlos a la lista
  productosFiltrados.forEach((bebida) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img src="${bebida.img}" alt="${bebida.nombre}">
      <h2>${bebida.nombre}</h2>
      <h3>$${bebida.precio}</h3>
      <button class="botonCompra" id="boton${bebida.id}">AGREGAR</button>
    `;
    listaProductos.appendChild(div);
  });
});
