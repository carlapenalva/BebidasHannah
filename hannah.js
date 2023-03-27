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
*/
/*
let operacion =prompt("Ingrese comprar si desea comprar un producto, información si desea información sobre un producto o finalizar si desea finalizar la operacion");
let adicion = 0
while ((operacion=="comprar") || (operacion=="Comprar") || (operacion=="COMPRAR")) {
    alert("Su compra ha sido exitosa");
    adicion = adicion+1;
    console.log("Su cantidad de compras es de ", adicion);
    operacion= prompt("Ingrese comprar si desea comprar un producto, información si desea información sobre un producto o finalizar si desea finalizar la operacion");
}

if ((operacion=="información") || (operacion=="Información") || (operacion=="INFORMACIÓN")) {
    alert ("Carasteristicas del producto");
}

else if ((operacion=="finalizar") || (operacion=="Finalizar") || (operacion=="FINALIZAR")) {
    alert ("Ha finalizado la operación");
}

else {
 alert ("No comprendimos la operación que quiere realizar, vuelva a ingresarla");  
}


function validarCalculo (calculo) {
    if (calculo == 1)  {
        let primerNumero = prompt("Coloque el primer numero que desea sumar")
        let segundoNumero = prompt("Coloque el segundo numero que desea sumar")
        suma(parseInt(primerNumero) , parseInt(segundoNumero))
    } else if (calculo == 2) {
        let primerNumero = prompt("Coloque el primer numero que desea dividir")
        let segundoNumero = prompt("Coloque por el numero que desea dividir")
        division(parseInt(primerNumero) , parseInt(segundoNumero))
    } else if (calculo == 3) {
        let primerNumero = prompt("Coloque el primer numero que desea restar")
        let segundoNumero = prompt("Coloque el segundo numero que desea restar")
        resta(parseInt(primerNumero) , parseInt(segundoNumero))
    }else if (calculo == 4) {
        let primerNumero = prompt("Coloque el primer numero que desea multiplicar")
        let segundoNumero = prompt("Coloque el segundo numero que desea multiplicar")
        multiplicacion(parseInt(primerNumero) , parseInt(segundoNumero))
    } else {
        let revalidacion = prompt("No seleccionó ningun numero valido, si quiere volver a realizar una consulta, presione 1, de lo contrario terminara el programa")
        if (revalidacion == 1){
            let calculo = prompt("Para realizar una suma coloque 1, para una division 2, para un promedio 3, para una multiplicacion 4")
            validarCalculo(calculo)
        }else{
            alert("Muchas gracias por haber utilizado nuestro calculador!")
        }
    }
}
let calculo = prompt("Para realizar una suma coloque 1, para una division 2, para una resta 3, para una multiplicacion 4")

validarCalculo(calculo)

function suma(primerNumero, segundoNumero){
    let suma = primerNumero + segundoNumero
    console.log("El resultado de la suma es :", suma)
}

function division(primerNumero, segundoNumero){
    let division = primerNumero/segundoNumero
    console.log("El resultado de la division es :", division)
}

function resta(primerNumero, segundoNumero){
    let resta = primerNumero-segundoNumero;
    console.log("El resultado de la resta es :", resta)
}

function multiplicacion(primerNumero, segundoNumero){
    let multiplicacion = primerNumero*segundoNumero;
    console.log("El resultado de la multiplicacion es :", multiplicacion)
} 
*/

//ARRAYS,CLASES 
/*


function totalFernets(arrayBebidas){
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
    <button class="botonCompra" id="${bebida.id}">AGREGAR</button>
    `;
    listaProductos.append(div);
 })   
}
cargarProductos();

let botonCompra = document.getElementById ("botonCompra");


const carrito= document.getElementById("carrito");
const abrirCarrito= document.getElementById("abrir");
const cerrarCarrito= document.getElementById("cerrar");

carrito = [];

/*botonCompra.addEventListener ("click", () =>{

})
*/
