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

class bebida {
    constructor (nombre, tipo, marca, precio, stock) {
        this.nombre =nombre;
        this.tipo =tipo;
        this.marca =marca;
        this.precio =precio;
        this.stock =stock
    }

    get_datos(){
        console.log("DATOS DEL PRODUCTO");
        console.log('Nombre' , this.nombre);
        console.log("Tipo de bebida:" , this.tipo);
        console.log("Marca:" , this.marca);
        console.log("Precio:" , this.precio);
        console.log("Stock:" , this.stock);
        console.log("    ");
    }

    get_stock(){
        if(this.stock >= 1){
        console.log("Tenemos stock del producto:" , this.stock);
        }
    
    }

    set_compra(cantidad){

        this.stock = this.stock + cantidad;

    }

    set_venta(cantidad){

        if(this.stock >= cantidad){
            this.stock = this.stock - cantidad
            console.log ("venta realizada");
        }
        else{
            console.log ("No disponemos de stock para esta venta")
        }
    }

}

let arrayBebidas = []
arrayBebidas.push(new bebida("fernet", "aperitivo", "branca", 1800, 3))
arrayBebidas.push(new bebida("fernet", "aperitivo", "1888", 1500, 1))
arrayBebidas.push(new bebida("vodka", "bebida blanca", "absolut", 1750, 5))

mostrarDatosBebidas(arrayBebidas)
mostrarStockBebidas(arrayBebidas)

let total = totalFernets(arrayBebidas)
console.log("Tenemos ",total," cantidad de fernet");

let exisencia = arrayBebidas.find((el) => el.marca === "absolut")
console.log("La info en nuestro stock del vodka absolut es:", exisencia)

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