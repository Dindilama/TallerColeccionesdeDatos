//Arreglos
/*
Los arreglos se reconoces por los corchetes, y guardan los datos por medio de posiciones iniciando por cero.
*/
//Objetos
/*
Los objetos se reconocen por el suso de llaves, y los datos se guardan por medio de referencias, clave : valor.
*/

//Ejemplos de arreglos y objetos

// ---Arrays
/*
var frutas = [
    "Banano",
    "Mango", 
    "Fresa",
    5000,
    function nombre() {
        alert("su nombre es erre");
    },
    ["naranja", 3000, true]
];
*/
//mostrar datos
//para ejecutar una funcion dentro de un arreglo recuerde colocar los parentesis despues de su llamado. ejemplo: arreglo[x]()
/*
document.write("<br>La fruta es: " + frutas[2] + "</br>");
document.write("<br>La fruta es: " + frutas[5][0] + "</br>");
*/
// ---Objetos
/*
var verduras = {
    "v1" : "Tomate",
    "v2" : "Cebolla",
    1 : "Ajo",
    "num" : 8000,
    "nombre" : function nom () {
        alert("Su apellido es malavé");
    },
    "objetoInterno":{
    "f1":"Mandarina",
    "f2":6000,
    "f3": function() {return "Hola mundo"}
    }
}
*/

//mostrar datos de un objeto, puedo imprimir los datos de un objeto de dos formas, llamadolo entre corchetes y dentro de comillas dobles; objeto["nom"] o con un punto; objeto.v2
/*
document.write("<p>La verdura es: " + verduras["v2"] + "</p>");
document.write("<p>La función de alerta es: " + verduras.nombre() + "</p>");
document.write("<p>La verdura es: " + verduras.objetoInterno.f3() + "</p>");
*/


/*
NOTA: para llamar un array dentro de un array o un objeto dentro de un objeto se debe tener presente la ubicación en el array o la clave en el objeto, para no tener errores.
*/

// como recorrer un array o un objeto
/*
var frutas = [
    "Fresas",
    "Mangos",
    "Bananos"
];
document.write("Las frutas son: " +frutas.length+"<br>");
for (var x = 0; x < frutas.length; x++) {
    document.write("La fruta #"+x+": "+frutas[x]+"<br>");
}

document.write("<hr>");
var frutas = [
    "Fresas",
    "Mangos",
    "Bananos",
    ["Manzana", "Pera", "Mora"]
];
document.write("Las frutas son: " +frutas.length+"<br>");
for (var x = 0; x < frutas.length; x++) {
    document.write("La fruta #"+x+": "+frutas[x]+"<br>");
}

for (var y = 0; y < frutas[3].length; y++) {
    document.write("La fruta #"+y+": "+frutas[3][y]+"<br>");
}

document.write("<hr>");
var frutas1 = [
    ["Manzana1", "Pera1", "Mora1"],
    ["Manzana2", "Per2a", "Mora2"],
    ["Manzana3", "Pera3", "Mora3"],
    ["Manzana4", "Pera4", "Mora4"]
];

document.write("Las frutas son: " +frutas1.length+"<br>");
for (var x = 0; x < frutas1.length; x++) {
    for (var y = 0; y < frutas1[x].length; y++) {
        document.write("La fruta #"+x+"-"+y+" "+frutas1[x][y]+"<br>");
    }
}
*/

/*
document.write("<hr>");
var frutas2 = [" Manzana", " Pera", " Mora"];
//funciones integradas en los arreglos
//agregar un dato al arreglo
document.write("frutas :" + frutas2.length + "<br>");
frutas2.push(" Banano", " Piña", "Uva");
document.write("frutas :" + frutas2.length + "<br>");
document.write("frutas :" + frutas2[0] + "<br>");
//borrar el ultimo dato de un arreglo
frutas2.pop();
document.write("frutas :" + frutas2.length + "<br>");
//borrar especifico
frutas2.splice(1,2);
document.write("frutas :" + frutas2.length + "<br>");
//slice sirve para mostrar un rango de datos
document.write("frutas :" + frutas2.slice() + "<br>");
*/

//como llenar un arreglo vacio
/*
document.write("<hr>");
var emptyArray = [];

//nececitaremos un ciclo
var datos = parseInt(prompt("Digite el tamaño del arreglo"));
for (var x = 0; x < datos; x++){
    //emptyArray.push(prompt("digite la fruta"));
    emptyArray[x] = prompt("digite una fruta" + x);
}
//recorrer el arreglo
for(var x = 0; x < emptyArray.length; x++){
    document.write("<p>Fruta #"+x+""+emptyArray[x]+"</p>")
}
document.write("<hr>");
*/

/*
document.write("<hr>");
var verduras = {
    "v1":" papa",
    "v2":" cebolla",
    "v3":" ajo"
};

//recorrer objeto
for (var clave in verduras) {
    document.write("Verdura :" + verduras[clave] + "<br>");
}
//mostrar claves de un objeto
document.write("Claves del objeto verdura :" +" "+ Object.keys(verduras) + "<br>");

//mostrar valores de un objeto
document.write("Valores del objeto verdura :" +" "+ Object.values(verduras) + "<br>");

//mostrar claves y valores de un objeto
document.write("Valores del objeto verdura :" +" "+ Object.entries(verduras) + "<br>");

document.write("<hr>");
*/

/*
document.write("<hr>");
var verduras = {
    "v1":"",
    "v2":"",
    "v3":""
};

Object.defineProperty(verduras, "v4",
{enumerable:true, writable:true, configurable:true, value:" Tomate"})

document.write("Verdura :" + verduras.v4);

document.write("<hr>");
*/

//Ejercicio 
var empleados = {
    "nombre" : [],
    "cargo" : [],
    "salario" : []
}

var numero = parseInt(prompt("digite numero de empleados"));

/*
for (var key in empleados) {
    for (var x = 0; x < numero; x++) {
        empleados[key][x] = prompt("Digite " + key);
    }
}
*/

for (var x = 0; x < numero; x++) {
    document.write("<br>");
    for (var key in empleados)  {
        empleados[key][x] = prompt("Digite " + key);
    }
}

for (var clave in empleados) {
    document.write(clave+"<br>");
    document.write(empleados[clave]+"<br>");
}

document.write("<hr>");

for(var y = 0; y < numero; y++){
    for (var clave in empleados) {
        document.write(clave+ ": ");
        document.write(empleados[clave][y]+"<br>");
    }
}