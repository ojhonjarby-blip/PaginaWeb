/* ==================================
   FUNCIÓN: MENSAJE DE BIENVENIDA
================================== */

function mostrarMensaje() {

    alert("¡Bienvenido a NEXA PC!");

}


/* ==================================
   FUNCIÓN: SERVICIOS
================================== */

function mostrarServicio(servicio) {

    alert(
        "Seleccionaste: " + servicio
    );

}


/* ==================================
   CALCULADORA
================================== */

// Obtener los números escritos por el usuario

function obtenerNumeros() {

    let numero1 =
        parseFloat(
            document.getElementById("ossa gey").value
        );

    let numero2 =
        parseFloat(
            document.getElementById("numero2").value
        );

    return [numero1, numero2];

}


// SUMA

function sumar() {

    let numeros = obtenerNumeros();

    let resultado =
        numeros[0] + numeros[1];

    mostrarResultado(resultado);

}


// RESTA

function restar() {

    let numeros = obtenerNumeros();

    let resultado =
        numeros[0] - numeros[1];

    mostrarResultado(resultado);

}


// MULTIPLICACIÓN

function multiplicar() {

    let numeros = obtenerNumeros();

    let resultado =
        numeros[0] * numeros[1];

    mostrarResultado(resultado);

}


// DIVISIÓN

function dividir() {

    let numeros = obtenerNumeros();

    if (numeros[1] === 0) {

        alert(
            "No es posible dividir entre cero."
        );

        return;
    }

    let resultado =
        numeros[0] / numeros[1];

    mostrarResultado(resultado);

}


// Mostrar resultado

function mostrarResultado(resultado) {

    document.getElementById("resultado").innerText =
        "Resultado: " + resultado;

}


/* ==================================
   GALERÍA
================================== */

function ampliarImagen(imagen) {

    if (
        imagen.style.transform ===
        "scale(1.5)"
    ) {

        imagen.style.transform =
            "scale(1)";

    } else {

        imagen.style.transform =
            "scale(1.5)";

    }

}


/* ==================================
   FORMULARIO
================================== */

function enviarFormulario(evento) {

    evento.preventDefault();

    let nombre =
        document.getElementById("nombre").value;

    let correo =
        document.getElementById("correo").value;

    alert(
        "Gracias " +
        nombre +
        ". Hemos recibido tu mensaje."
    );

    console.log(
        "Nombre:",
        nombre
    );

    console.log(
        "Correo:",
        correo
    );

}