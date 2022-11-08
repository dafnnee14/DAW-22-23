let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');
let cents = document.getElementById('cents');

let contadorCents = 0;
let contadorSecs = 0;
let contadorMins = 0;
// Botón START
// El cronómetro arranca
function start() {
    // Aumento el contador en 1 por que la función se ejecuta cada centésima de segundo
    contadorCents = contadorCents + 1;

    // Compruebo si las centésimas llegan a 100 y si es así reiniciar el contador y aumetar un segundo
    if (contadorCents == 100) {
        // reiniciamos el contador
        contadorCents = 0;
        // los segundos aumentan en 1
        contadorSecs = contadorSecs + 1;
    }


    // Imprimo el resultado del contador
    cents.innerHTML = contadorCents;
    segundos.innerHTML = contadorSecs;


    // La función se ejecuta cada 10ms (1 centésima de segundo)
    setTimeout(start, 10)
}