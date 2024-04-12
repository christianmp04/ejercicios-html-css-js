function mostrarHoraActualEnElementos() {
    const elementosNow = document.getElementsByClassName("now");
    const fecha = new Date();
    const hora = fecha.getHours().toString().padStart(2, '0'); 
    const minutos = fecha.getMinutes().toString().padStart(2, '0'); 
    const segundos = fecha.getSeconds().toString().padStart(2, '0'); 
    const horaActual = hora + ":" + minutos + ":" + segundos;

    for (let elemento of elementosNow) {
        elemento.textContent = horaActual;
    }
}

setInterval(mostrarHoraActualEnElementos, 1000);
