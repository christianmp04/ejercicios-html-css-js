function actualizarHora() {
    var divContenido = document.getElementById("contenido");
    var fecha = new Date();
    var hora = fecha.getHours().toString().padStart(2, '0'); 
    var minutos = fecha.getMinutes().toString().padStart(2, '0'); 
    var segundos = fecha.getSeconds().toString().padStart(2, '0'); 
    divContenido.textContent = hora + ":" + minutos + ":" + segundos; 
}
setInterval(actualizarHora, 1000 ); 
