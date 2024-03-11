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

//  let listaTareas = []
//  const pomelo = document.getElementById("pomelo")



 function miEleccion(nombreFruta, precio) {
    
   let cantidad = prompt(`¿Qué cantidad de ${nombreFruta} deseas:`);
// convierto el  string a numero
   cantidad = Number(cantidad)
//    console.log(typeof cantidad);

   console.log(`Compra : ${nombreFruta} -> ${precio * cantidad}`);

}

// let totalCompra = 0;
 
 
//  document.getElementById("pomelo").onclick = function () {
//     miEleccion("pomelo")
//  }
//  document.getElementById("kiwi").onclick = function () {
//     miEleccion("kiwi")
//  }
//  document.getElementById("limón").onclick = function () {
//     miEleccion("limón")
//  }
//  document.getElementById("sandia").onclick = function () {
//     miEleccion("sandia")
//  }



// let frutas = {
//     0: [pomelo, 2.50]
//     1: [kiwi, 4.20]
//     2: [limon, 1.20]
//     3: [sandia, 1.20]
// }


