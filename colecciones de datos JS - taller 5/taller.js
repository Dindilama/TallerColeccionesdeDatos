//Taller de colecciones de datos

//Ejercicio 1
/*
Cree un objeto con los siguientes datos: id, nombre, edad, pasatiempos y muestre en html las propiedades o llaves de ese objeto.
*/

var usuario = {
    "id": " 1152187",
    "name": " Erre Malavé",
    "age": " 33",
    "hobbie": " Video juegos",
}

document.write("<hr>");
document.write("<h4>Ejercicio 1 - CLAVES DEL OBJETO USUARIO</h4>");

document.write("Claves del objeto Usuario: " +" "+ Object.keys(usuario) + "<br>");
document.write("<hr>");
document.write("<br>");

//Ejercicio 2
/*
Cree un objeto con los siguientes datos: id, nombre, edad, pasatiempos y muestre en html las propiedades o llaves de ese objeto.
*/
document.write("<hr>");
document.write("<h4>Ejercicio 2 - VALORES DEL OBJETO USUARIO</h4>");

document.write("Valores del objeto Usuario: " +" "+ Object.values(usuario) + "<br>");
document.write("<hr>");
document.write("<br>");

//Ejercicio 3
/*
Cree un objeto con los siguientes datos: id, nombre, edad, pasatiempos y muestre en html las propiedades o llaves de ese objeto.
*/
var usuario2 = {
    "id": "1152187",
    "name": "Erre Malavé",
    "age": "33",
    "hobbie": "Video juegos",
    "function": function () {return "A " + usuario2["name"]+ " " + "le gustan los " + usuario2["hobbie"]}
}

document.write("<hr>");
document.write("<h4>Ejercicio 3 - FUNCIÓN DENTRO DEL OBJETO USUARIO</h4>");

document.write("Info: " +" "+ usuario2.function() + "<br>");
document.write("<hr>");
document.write("<br>");

//Ejercicio 6
/*
    6.	Consulte qué son los arrays y explique en qué se diferencian los arrays de los objetos.
*/
document.write("<hr>");
document.write("<h4>Ejercicio 6 - DEFINICIÓN DE ARRAYS Y SU DIFERENCIA DE LOS OBJETOS</h4>");

document.write("<p>Arrays: Son un identificador que referencia un conjunto de datos del mismo tipo.</p>");
document.write("<p>Los arrays se utilizan cuando almacenamos múltiples valores de una variable, mientra que un objeto puede contener múltiples variables con sus valores.</p>");
document.write("<hr>");
document.write("<br>");

//Ejercicio 7
/*
    7.	Menciona por lo menos 1 propiedades y 3 funciones que tienen integrados los arrays.
*/
document.write("<hr>");
document.write("<h4>Ejercicio 7 - Propiedades y funciones de los arrays</h4>");

document.write("<p>Propiedad Length: La propiedad length hace referencia al mayor índice presente en el array, más uno</p>");
document.write("<p>Funciones: forEach() funcion para recorrer arrays, includes() determina si un array incluye un determinado elemento, devuelve true o false segun corresponda, pop() elimina el último elemento de un array y lo devuelve.</p>");
document.write("<hr>");
document.write("<br>");

//Ejercicio 8 y 9
/*
    8.	Realiza dos ejercicios explicando cómo funcionan los métodos push(), pop(), slice() y splice().
    9.	Crea un array con nombres de frutas e imprime los datos en html por medio de un ciclo.
*/
document.write("<hr>");
document.write("<h4>Ejercicio 8 y 9 - Aplicar metodos push(), pop(), splice() y slice(). Recorrer un array</h4>");

var frutas = [" Manzana", " Pera", " Mora", " Mango", " Uva"];
document.write("Cantidad de frutas :" + frutas.length + "<br>");

for (var x = 0; x < frutas.length; x++) {
    document.write("Fruta # "+ x + " :" + frutas[x] + "<br>"); 
    
}

//Push
document.write("<p>Método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.</p>");
frutas.push(" Banano");
document.write("Cantidad de frutas :" + frutas.length + "<br>");

for (var x = 0; x < frutas.length; x++) {
    document.write("Fruta # "+ x + " :" + frutas[x] + "<br>"); 
    
}

//Pop
document.write("<p>Método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.</p>")
frutas.pop();
document.write("Cantidad de frutas :" + frutas.length + "<br>");

for (var x = 0; x < frutas.length; x++) {
    document.write("Fruta # "+ x + " :" + frutas[x] + "<br>"); 
    
}

//Splice
document.write("<p>Método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.</p>")
frutas.splice(3,4);
document.write("Cantidad de frutas :" + frutas.length + "<br>");

for (var x = 0; x < frutas.length; x++) {
    document.write("Fruta # "+ x + " :" + frutas[x] + "<br>"); 
    
}

//Slice
document.write("<p>Método slice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.</p>")
document.write("Frutas :" + frutas.slice(1,3) + "<br>");
document.write("<hr>");
document.write("<br>");

//Ejercicio 10
/*
    10.	Cree un array con 3 elementos inicialmente y después agregue 2 elementos más, imprima en html todo los elementos.
*/
document.write("<hr>");
document.write("<h4>Ejercicio 10 - Cree un array con 3 elementos inicialmente y después agregue 2 elementos más</h4>");


var games = [" God of War", " Tomb Raider", " Genshin Impact"];
document.write("Cantidad de Juegos :" + games.length + "<br>");
games.push(" PacMan");
games.push(" ApeScape")

for (var y = 0; y < games.length; y++) {
    document.write("Juegos # "+ y + " :" + games[y] + "<br>");
}

document.write("<hr>");
document.write("<br>");

//Ejercicio 11
/*
    11.	Del siguiente arreglo [3,5,9,10,35,42,12,22,25] mostrar en html cual es el primer número, el último, el del centro.
*/
document.write("<hr>");
document.write("<h4>Ejercicio 11 - Del siguiente arreglo [3,5,9,10,35,42,12,22,25] mostrar en html cuales y cuantos son los números pares y los impares.</h4>");
var num = [3,5,9,10,35,42,12,22,25];

var first = num[0];
var midle = num[Math.floor(num.length/2)];
var last = num[num.length -1];

document.write("El primer numero es: " + first + "<br>");
document.write("El numero del medio es: " + midle + "<br>");
document.write("El ultimo numero es: " + last + "<br>");

document.write("<hr>");
document.write("<br>");

//Ejercicio 12
/*
    12. Del siguiente arreglo [3,5,9,10,35,42,12,22,25] mostrar en html cuales y cuantos son los números pares y los impares.
*/
document.write("<hr>");
document.write("<h4>Ejercicio 12 - Del siguiente arreglo [3,5,9,10,35,42,12,22,25] mostrar en html cuales y cuantos son los números pares y los impares.</h4>");
var num2 = [3,5,9,10,35,42,12,22,25];
var numPar = 0;
var numImpar = 0;

for (var i = 0; i < num2.length; i++) {
    if(num[i] % 2 === 0){
        numPar ++;
    }else{
        numImpar ++;
    }
}

document.write("numeros pares: " + numPar + "<br>");
document.write("numeros impares: " + numImpar + "<br>");

document.write("<hr>");
document.write("<br>");

//Ejercicio 13
/*
    12. Del siguiente arreglo [3,5,9,10,35,42,12,22,25] mostrar en html cuales y cuantos son los números pares y los impares.
*/
document.write("<hr>");
document.write("<h4>Ejercicio 13 - Del siguiente arreglo [tomate,banano,manzana,pera,cebolla,papa,fresas,Ajo,Sandía] mostrar en html en cual  posición se encuentran las frutas y en cual posición las verduras.</h4>");
var revuelteria = [" tomate"," banano", " manzana", " pera"," cebolla"," papa", " fresas"," Ajo", " Sandía"];

for (var f = 0; f < revuelteria.length; f++) {
    document.write("<p>Posición #"+f+""+revuelteria[f]+"</p>")
}

document.write("<hr>");
document.write("<br>");

//Ejercicio 14
/*
    14.	Del siguiente arreglo [29,5,40,10,35,42,12,22,25,1,3] mostrar en html los elementos organizados de forma ascendente.
*/
document.write("<hr>");
document.write("<h4>Ejercicio 14 - Del siguiente arreglo [29,5,40,10,35,42,12,22,25,1,3] mostrar en html los elementos organizados de forma ascendente.</h4>");

var num3 = [29,5,40,10,35,42,12,22,25,1,3];
num3.sort(function(a, b){return a - b});;

for (var h = 0; h < num3.length; h++) {
    document.write(num3[h]+"<br>");
}

document.write("<hr>");
document.write("<br>");

//Ejercicio 15
/*
   15.	Del siguiente arreglo [29,5,40,10,35,42,12,22,25,1,3] mostrar en html los elementos organizados de forma descendente.
*/
document.write("<hr>");
document.write("<h4>Ejercicio 15 - Del siguiente arreglo [29,5,40,10,35,42,12,22,25,1,3] mostrar en html los elementos organizados de forma descendente.</h4>");

var num4 = [29,5,40,10,35,42,12,22,25,1,3];
num4.sort(function(a, b){return b - a});

for (var h = 0; h < num4.length; h++) {
    document.write(num4[h]+"<br>");
}

document.write("<hr>");
document.write("<br>");

//Ejercicio 16
/*
   16.	Del siguiente arreglo [2,4,6,8,10,12,14,16,18,20,22] mostrar en html los elementos ordenados aleatoriamente.
*/
document.write("<hr>");
document.write("<h4>Ejercicio 16 - Del siguiente arreglo [29,5,40,10,35,42,12,22,25,1,3] mostrar en html los elementos organizados de forma descendente.</h4>");

var num4 = [29,5,40,10,35,42,12,22,25,1,3];
num4.sort(function() { return Math.random() - 0.5 });

for (var h = 0; h < num4.length; h++) {
    document.write(num4[h]+"<br>");
}

document.write("<hr>");
document.write("<br>");