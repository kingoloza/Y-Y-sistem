const links = document.querySelectorAll("nav a")
const contenido = document.querySelector(".contenido")

links.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const seccion = link.textContent;
        contenido.innerHTML = "<h1>" + seccion + "</h1><p>Sección en construcción...</p>";
    });
});