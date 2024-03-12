/*
Hay que programar un carrito de compra de fruta.

El cliente eligirá que fruta quiere haciendo click sobre la imagen.
Un mensaje emergente le preguntará qué cantidad quiere.

Esta información se mostrará a la derecha, bajo "Total carrito", 
en <p id="carrito"></p>, de esta forma:
 Kiwi 2 kg x 4,20€/kg = 8,40 €

El total se actualizará con cada compra
 Total Compra: 8,40€
 
Se dará la opción de añadir o no más productos que se mostrarán
a continuación de los anteriores, y se sumará todo en el total. 
Por ejemplo:  
 Kiwi 2 kg x 4, 20€/kg = 8, 40€
 Pomelo 1 kg x 2,50€/kg = 2,50€
 Total Compra: 10,90€

Puedes modificar el código facilitado si ello te ayuda con el ejercicio,
pero deberás justificarlo.

Recuerda la importancia comentar con detalle el código.

 Lo importante es el cálculo, no los estilos css
 */

// CARRITO APP V1.0.0
// 2024-03-11

let sumaTotal = 0; // Variable para almacenar el precio total de la compra
let listaFrutas = []; // Lista para almacenar las cantidades y precios de las frutas seleccionadas

let carrito = document.getElementById("carrito") // Creamos la variable "carrito" y le decimos donde esta en el HTML
let preuFinal = document.getElementById("preuFinal") // Creamos la variable "preuFinal" y le decimos donde esta en el HTML

function miEleccion(nombreFruta, precio, unidad) {  // Con esta función obtenemos el nombre de la fruta, precio y la unidad de las frutas seleccionadas, Que se la hemos asignado manualmente en el HTML
    let cantidad = prompt(`¿Qué cantidad de ${nombreFruta} deseas:`); // Hacemos un prompt para preguntar las cantidades  le añadimos ${nombreFruta}para que nos diga el nombre difernte de cada fruta.
    cantidad = Number(cantidad); // Pasamos el string a numero porque nos lo daba como String y necesitamos que el tipo sea numero para a continuación poder hacer las operaciones

    let precioTotal = (precio * cantidad).toFixed(2); //Creamos la variable para almacenar el precio total de la compra, y añadimos un ".toFixed(2)" para que nos diga el precio con 2 decimales.
    sumaTotal += parseFloat(precioTotal); // hacemos la suma de los precios de las frutas seleccionadas

    // Añadir la información de la fruta seleccionada a la lista
    listaFrutas.push({ fruta: nombreFruta, cantidad: cantidad, precioTotal: parseFloat(precioTotal) });

    carrito.innerHTML += `<p><i class="fas fa-trash-alt fa-sm" style="color:red" onclick="borrarProducto(${listaFrutas.length - 1})"></i> ${nombreFruta} ${cantidad} ${unidad} x ${precio} €/${unidad} = ${precioTotal} €</p>`; // le añadimos una "p" y le asignamos todo lo que queremos que aparezca en la lista que se va acumulando de compra como, "nombreFruta, cantidad, precio, unidad y al final el resultado."
    preuFinal.innerText = sumaTotal.toFixed(2) + "€"; // Actualizamos el HTML con el total
}



function borrarProducto(indice) {
  // Restar el precio del producto borrado al total
  sumaTotal -= listaFrutas[indice].precioTotal; //Resta el precio del producto que se está eliminando al total acumulado (sumaTotal). listaFrutas[index] accede al objeto del producto en la lista listaFrutas en la posición index, y precioTotal es todo lo acumulado.
  preuFinal.innerText = sumaTotal.toFixed(2) + "€"; // Actualizamo el total despues de quitarlo anteriormente.

  
  listaFrutas.splice(indice, 1);// Eliminar el producto de la lista y del carrito, usamos el splice() para eliminar un elemento del array listaFrutas en la posición index y el número "1" indica que solo se eliminará un elemento en esa posición.
  carrito.removeChild(carrito.childNodes[indice]); //Elimina el elemento del carrito de la pantalla. Y el "carrito.childNodes[index]" accede al nodo hijo del carrito en la posición index, y removeChild() lo elimina.
}











