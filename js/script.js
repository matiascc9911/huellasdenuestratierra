document.addEventListener('DOMContentLoaded', function() {
    navegacionFija()
})

document.querySelector('.prov-cont').addEventListener('click', function (e) {
    if (e.target.closest('.imgs__contenedor, a')) return;
    const track = this.querySelector('.sect-prov');
    const isPaused = track.style.animationPlayState === 'paused';
    track.style.animationPlayState = isPaused ? 'running' : 'paused';
});

function navegacionFija(){
    const header = document.querySelector('.header')
    const imagenHeader = document.querySelector('.image-header')
    const oculto = document.querySelector('.oculto')

    document.addEventListener('scroll', function(){
        console.log(imagenHeader.getBoundingClientRect().bottom);
        if(imagenHeader.getBoundingClientRect().bottom < 1) {
            header.classList.add('fijo');
            oculto.classList.remove('oculto');
        } else {
            header.classList.remove('fijo');
            oculto.classList.add('oculto');

        }
    })
}

//Esta puede ser nuestra fecha objetivo, cuando la lancemos sabremos con más precisión.
const objetivo = new Date("2025-06-01T00:00:00").getTime();

//Aca voy a codificar la cuenta regresiva. 
const reloj = setInterval(() => {
    const fechaActual = new Date().getTime();
    const distancia = objetivo - fechaActual;

    // Esta condicional me permite arrojar un mensaje en la pagina cuando el reloj se encuentre en 0
    if (distancia < 0) {
        clearInterval(reloj);
        document.getElementById("reloj").innerHTML = "Tiempo terminado! Espere mientras terminamos con los detalles... ";
        return;
    }

    //Aqui le voy a indicar el numero que debe figurar en la casilla correspondiente, todo mediante simples formulas matemáticas 
    //Por ejemplo, para el primero tengo que redondear un numero proveniente del resultado de la división de la distancia y un dia pasado en milisegundos.
    //La formula para el dia se identifica fácilmente: 1000 = milisegundos en un segundo, 60 = segundos en un minuto, 60 = minutos en una hora, y 24 = horas en un dia.
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    //De la constante horas en adelante me di cuenta que era mejor obtener el resultado final mediante un resultado de resto(el simbolo %) de una división
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    //En este apartado lo que hago es selecciona el elemento en HTML desde su identificador para modificarlo con un nuevo contenido. En estos casos los voy a mostrar con padStart para que contengan ese 0 a la izquierda.
    document.getElementById("dias").textContent = dias.toString().padStart(2, '0');
    document.getElementById("horas").textContent = horas.toString().padStart(2, '0');
    document.getElementById("minutos").textContent = minutos.toString().padStart(2, '0');
    document.getElementById("segundos").textContent = segundos.toString().padStart(2, '0');

    const dias1 = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas1 = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos1 = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos1 = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("dias1").textContent = dias1.toString().padStart(2, '0');
    document.getElementById("horas1").textContent = horas1.toString().padStart(2, '0');
    document.getElementById("minutos1").textContent = minutos1.toString().padStart(2, '0');
    document.getElementById("segundos1").textContent = segundos1.toString().padStart(2, '0');

}, 1000);



//Inicialmente puede parecer complicado pero es un codigo muy sencillo y versatil de entender. Cualquier duda sobre su funcionamiento, no dudes en consultarme..