function mostrarDatos() {
    // Obtén el formulario y el mensaje de gracias por su ID
    var formulario = document.getElementById("form-consultas");
    var mensajeGracias = document.getElementById("mensajeGracias");

    // Verifica si el formulario es válido
    if (formulario.checkValidity()) {
        // Oculta el formulario
        formulario.style.display = "none";

        // Muestra el mensaje de gracias
        mensajeGracias.style.display = "block";
    } else {
        // Si el formulario no es válido, puedes mostrar un mensaje de error o realizar otras acciones según tus necesidades
        alert("Por favor, completa todos los campos obligatorios.");
    }
}

