var nombre= "Xochitl"
;
var edad = 70;

var resultado= nombre + " tiene" + edad + "años.";

//document.write (resultado);
//console.log (resultado);

var datos = document.getElementById ("Datos");
datos.innerHTML= resultado;

document.body.style.backgroundColor = "white";

var tiempo= document.getElementById ("Tiempo");
tiempo.innerHTML = new Date();
