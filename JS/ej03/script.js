function actualizarHora() {
    const divContenido = document.getElementById("contenido");
    const fecha = new Date();
    const hora = fecha.getHours().toString().padStart(2, '0'); 
    const minutos = fecha.getMinutes().toString().padStart(2, '0'); 
    const segundos = fecha.getSeconds().toString().padStart(2, '0'); 
    divContenido.textContent = hora + ":" + minutos + ":" + segundos; 
}
setInterval(actualizarHora, 1000 ); 

