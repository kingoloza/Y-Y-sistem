const links = document.querySelectorAll("nav a")
const contenido = document.querySelector(".contenido")

links.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const seccion = link.textContent;
        
        if (seccion.includes("Proveedores")) {
            contenido.innerHTML = `
                <div class="seccion-header">
                    <h1>📦 Proveedores</h1>
                    <button class="btn-crear">+ Crear proveedor</button>
                </div>
                <input type="text" class="buscador" placeholder="Buscar proveedor o producto...">
                <div class="lista-proveedores">
                    <p>No hay proveedores registrados aún.</p>
                </div>
            `;
        } else {
            contenido.innerHTML = "<h1>" + seccion + "</h1><p>Sección en construcción...</p>";
        }

        document.addEventListener("click", function(e) {
    if (e.target.classList.contains("btn-crear")) {
        contenido.innerHTML += `
            <div class="formulario-proveedor">
                <h2>Nuevo Proveedor</h2>
                <select class="campo" id="categoria">
                    <option value="">Selecciona categoría</option>
                    <option value="lacteos">🥛 Lácteos</option>
                    <option value="carnicos">🥩 Cárnicos</option>
                    <option value="snacks">🍿 Snacks</option>
                    <option value="bebidas">🥤 Bebidas</option>
                </select>
                <input class="campo" id="subcategoria" type="text" placeholder="Subcategoría (ej: Quesos)">
                <input class="campo" id="razon-social" type="text" placeholder="Razón social">
                <input class="campo" id="celular" type="tel" placeholder="Celular de contacto">
                <input class="campo" id="correo" type="email" placeholder="Correo electrónico">
                <button class="btn-guardar">💾 Guardar proveedor</button>
            </div>
        `;
    }
});

    });
});
