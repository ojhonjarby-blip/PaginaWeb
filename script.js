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
    alert("Seleccionaste: " + servicio);
}


/* ==================================
   CALCULADORA
================================== */

function obtenerNumeros() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    return [numero1, numero2];
}

function sumar() {
    let numeros = obtenerNumeros();
    let resultado = numeros[0] + numeros[1];
    mostrarResultado(resultado);
}

function restar() {
    let numeros = obtenerNumeros();
    let resultado = numeros[0] - numeros[1];
    mostrarResultado(resultado);
}

function multiplicar() {
    let numeros = obtenerNumeros();
    let resultado = numeros[0] * numeros[1];
    mostrarResultado(resultado);
}

function dividir() {
    let numeros = obtenerNumeros();
    if (numeros[1] === 0) {
        alert("No es posible dividir entre cero.");
        return;
    }
    let resultado = numeros[0] / numeros[1];
    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}


/* ==================================
   GALERÍA
================================== */

function ampliarImagen(imagen) {
    if (imagen.style.transform === "scale(1.5)") {
        imagen.style.transform = "scale(1)";
    } else {
        imagen.style.transform = "scale(1.5)";
    }
}


/* ==================================
   FORMULARIO DE CONTACTO
================================== */

function enviarFormulario(evento) {
    evento.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;

    alert("Gracias " + nombre + ". Hemos recibido tu mensaje.");
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
}


/* ==================================
   AGENDAR CITA Y GENERAR TICKET PDF
================================== */

function agendarCita(evento) {
    evento.preventDefault();

    // Obtener valores del formulario de citas
    let nombre = document.getElementById("citaNombre").value;
    let apellido = document.getElementById("citaApellido").value;
    let telefono = document.getElementById("citaTelefono").value;
    let correo = document.getElementById("citaCorreo").value;
    let mantenimiento = document.getElementById("tipoMantenimiento").value;
    let fecha = document.getElementById("fechaCita").value;
    let hora = document.getElementById("horaCita").value;

    // Generar un número de ticket único aleatorio
    let numTicket = "NEXA-" + Math.floor(100000 + Math.random() * 900000);

    // Crear el documento PDF usando jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        unit: "mm",
        format: [80, 150] // Formato de ticket recibo (80mm x 150mm)
    });

    // Diseñar el ticket en PDF con estilo futurista de NEXA PC
    doc.setFillColor(5, 8, 20); // Fondo oscuro
    doc.rect(0, 0, 80, 150, "F");

    doc.setTextColor(0, 229, 255); // Cian Neón
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("NEXA PC", 40, 15, { align: "center" });

    doc.setFontSize(9);
    doc.setTextColor(215, 227, 255);
    doc.text("COMPROBANTE DE CITA", 40, 22, { align: "center" });
    
    // Línea divisora
    doc.setDrawColor(0, 229, 255);
    doc.setLineWidth(0.5);
    doc.line(10, 26, 70, 26);

    // Detalles del cliente y la reserva
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 229, 255);
    doc.text("N° Cita:", 10, 35);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(255, 255, 255);
    doc.text(numTicket, 30, 35);

    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 229, 255);
    doc.text("Cliente:", 10, 43);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(255, 255, 255);
    doc.text(nombre + " " + apellido, 10, 49);

    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 229, 255);
    doc.text("Teléfono:", 10, 57);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(255, 255, 255);
    doc.text(telefono, 10, 63);

    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 229, 255);
    doc.text("Correo:", 10, 71);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(255, 255, 255);
    doc.text(correo, 10, 77);

    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 229, 255);
    doc.text("Servicio:", 10, 85);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(255, 255, 255);
    doc.text(mantenimiento, 10, 91);

    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 229, 255);
    doc.text("Fecha:", 10, 99);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(255, 255, 255);
    doc.text(fecha, 30, 99);

    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 229, 255);
    doc.text("Hora:", 10, 107);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(255, 255, 255);
    doc.text(hora, 30, 107);

    // Línea divisora inferior
    doc.line(10, 115, 70, 115);

    // Mensaje de pie de ticket
    doc.setFontSize(8);
    doc.setTextColor(143, 163, 204);
    doc.text("Por favor presenta este ticket el día de tu cita.", 40, 123, { align: "center", maxWidth: 60 });
    doc.text("¡Gracias por confiar en NEXA PC!", 40, 133, { align: "center" });

    // Descargar automáticamente el archivo PDF generado
    doc.save("Ticket_Cita_" + numTicket + ".pdf");

    // Alerta de confirmación en pantalla
    alert(
        "¡Cita agendada con éxito!\n\n" +
        "Se ha descargado tu ticket de cita (" + numTicket + ") en formato PDF."
    );

    // Limpiar el formulario de citas
    document.getElementById("formCita").reset();
}
