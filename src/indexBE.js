let inputTarea = document.getElementById("inputTarea")
let btnAgreagar = document.getElementById("btnAgregar")
let contenedorPrincipal = document.getElementById("contenedorPrincipal")


btnAgreagar.addEventListener("click", function addTask() {
    if (inputTarea.value === "") {
        alert("se debe ingresar texto")
        return false
    }

    let contenedor = document.createElement("div")
    contenedor.className = "contenedorTareas"
    
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    checkbox.id = "checkbox"
    
    let tarea = document.createElement("p")
    tarea.innerHTML = inputTarea.value
    
    let icon = document.createElement("img")
    icon.src = "/src/img/compartimiento.png"
    icon.className = "icon"
   
    contenedor.appendChild(checkbox)
    contenedor.appendChild(tarea)
    contenedor.appendChild(icon)
    contenedorPrincipal.appendChild(contenedor)
    })

