//La idea es poder realizar un ecommerce de bebidas como proyecto final. Con lo que aprendimos hasta hoy busque lograr las bases del mismo
let edad = parseInt(prompt ("Ingrese su edad"));
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
let suma = 0
while ((operacion=="comprar") || (operacion=="Comprar") || (operacion=="COMPRAR")) {
    alert("Su compra ha sido exitosa");
    suma = suma+1;
    console.log("Su cantidad de compras es de ", suma);
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


//*let iva, calcule el iva de su compra.