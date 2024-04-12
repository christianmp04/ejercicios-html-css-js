var colores = ["red", "green", "blue", "yellow", "orange"]; 
var indiceColor = 0;
function cambiarColorFondo() {
    var divContenido = document.getElementById("contenido");
    divContenido.style.backgroundColor = colores[indiceColor]; 
    indiceColor = (indiceColor + 1) % colores.length; 
}

setInterval(cambiarColorFondo, 1000); 
