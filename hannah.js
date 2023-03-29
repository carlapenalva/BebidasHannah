//La idea es poder realizar un ecommerce de bebidas como proyecto final. Con lo que aprendimos hasta hoy busque lograr las bases del mismo
/*let edad = parseInt(prompt ("Ingrese su edad"));
if (edad<18) {
    alert ("Sos menor de edad, no podes acceder a esta pagina")
}
else if (edad>=18){
    alert ("Bienvenido a Hannah Bebidas")
}
else {
    alert ("No deciframos tu edad, por favor complete este campo")
}
//ARRAYS,CLASES 
/*function totalFernets(arrayBebidas){
    let suma = 0
    for(const bebida of arrayBebidas){
        if(bebida.nombre === "fernet"){
            suma = suma + bebida.stock
        }
    }

    return suma
}

function mostrarDatosBebidas(arrayBebidas){
    for(const bebida of arrayBebidas){
        bebida.get_datos()
    }
}

function mostrarStockBebidas(arrayBebidas){
    for(const bebida of arrayBebidas){
        bebida.get_stock()
    }
} 




function agregarCarrito(e){
    console.log("Producto agregado");
    console.log(e.target);
}

let botonCompra= document.querySelectorAll(".botonCompra");

for(let boton of botonCompra){
    boton.addEventListener("click" , agregarCarrito);
}
*/

class bebida {
    constructor (id, nombre, precio, img) {
        this.id =id;
        this.nombre =nombre;
        this.precio =precio;
        this.img =img;
        this.cantidad =1
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


abrirCarrito.addEventListener("click", ()=>{
 carritoCompra.classList.add("visible");
 
 mostrarCarrito()
})



function mostrarCarrito(){
    carritoCompra.innerHTML='<button class."cerrarCarrito" id="cerrar"><img src="../imagenes/logo/cerrarventana.png" alt="cerrar"></button> <h2>Carrito Compras</h2>'
    const cerrarCarrito= document.getElementById("cerrar");
    cerrarCarrito.addEventListener("click", () => {
        carritoCompra.classList.remove("visible");
    });
    carrito.forEach (bebida =>{
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <h2>${bebida.nombre}</h2>
        <h3>$${bebida.precio}</h3>
        <p>${bebida.cantidad}<p>
        <button class="botonCompra" id= "eliminar${bebida.id}">Eliminar</button>
        `;
        carritoCompra.appendChild(div);
        const boton=document.getElementById(`eliminar${bebida.id}`);
        boton.addEventListener("click", ()=>{
            eliminarDelCarrito(bebida.id);
        })

})   
}
function eliminarDelCarrito(id) {
    const producto = carrito.find(bebida=> bebida.id===id);
    const indice= carrito.indexOf(producto);
    carrito.splice(indice,1);
    mostrarCarrito();
}