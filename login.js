console.log("login.js conectado correctamente")
const boton = document.querySelector("button")
boton.addEventListener("click", function() {
    const usuario = document.querySelector("input[type='text']").value
    const password = document.querySelector("input[type='password']").value
    if (usuario === "admin" && password === "1234"){
    alert("Bienvenido administrador");
    } else {
    alert("usuario o contraseña incorrectos");
    }
}); 