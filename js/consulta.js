function mostrarDatos() {
    // Formulario y mensaje de Gracias
    var formulario = document.getElementById("form-consultas");
    var mensGracias = document.getElementById("mensGracias");

    // Aca se verifica si el formulario es válido
    if (formulario.checkValidity()) {
        // Oculta el formulario
        formulario.style.display = "none";

        // Se muestra el mensaje de Gracias
        mensGracias.style.display = "block";
    } else {
        // Mensaje de completar formulario
        alert("Por favor, completa todos los campos obligatorios.");
    }
}

