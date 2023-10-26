

let header = `

<nav class="nav">
    <div class="logo">
        <img src="img/logo.png" alt="logo">
        <a href="#">Pagina</a>
    </div>
    <div class="link">
        <a href="#">inicio</a>
        <a href="#">quienes somos</a>
        <a href="#">peliculas</a>
        <a href="">estrenos</a>
        <a href="#">consultas</a>
        </div>
    <div class="buscador">

        <input type="text" class="src" name="search" placeholder="buscar " autocomplete="off" >

    </div>
</nav>

`

document.getElementById("header").innerHTML = header
