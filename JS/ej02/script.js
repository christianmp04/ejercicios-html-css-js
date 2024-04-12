const colores = ["red", "green", "blue", "yellow", "orange"]; 
let indiceColor = 0;
function cambiarColorFondo() {
    const divContenido = document.getElementById("contenido");
    divContenido.style.backgroundColor = colores[indiceColor]; 
    indiceColor = (indiceColor + 1) % colores.length; 
}

setInterval(cambiarColorFondo, 1000);  

