function mostrarDatos() {
    document.getElementById("registro-ok").style.visibility = "visible"

    // Se guardan los datos en variables
    var nombre = document.getElementById("nombre").value
    var apellido = document.getElementById("apellido").value
    var email = document.getElementById("email").value

    // Se valida si alguno de los campos está vacío
    if (nombre === '' || apellido === '' || email === '') {
        alert('Por favor, complete todos los campos.');
        document.getElementById("registro-ok").style.visibility = "hidden";
        return; // Se sale de la función si falta algún dato
    } else {
        var correo = apellido.split(' ').join('') + "." + nombre.split(' ').join('') + "@empresa.com.ar"
        var password = apellido.split(' ').join('') + "-" + "!#*"

        // Si todos los datos están completos, se muestra la otra columna
        document.getElementById("registro-ok").style.visibility = "visible";

        // Colocamos los datos en los span
        document.getElementById("mostrarNom").textContent = nombre
        document.getElementById("mostrarApe").textContent = apellido.toUpperCase()
        document.getElementById("mostrarEmail").textContent = email
}
}

function borrarDatos() {
    document.getElementById("formulario").reset()
    document.getElementById("mostrarNom").textContent = ""
    document.getElementById("mostrarApe").textContent = ""
    document.getElementById("mostrarEmail").textContent = ""
    document.getElementById("registro-ok").style.visibility = "hidden"
}

window.onload = function () {
    document.getElementById("registro-ok").style.visibility = "hidden"
}