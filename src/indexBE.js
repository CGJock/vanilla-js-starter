import { postTask, getTask, delTask, putTask, updateTask } from "./index.js";
//variables que se usaran para interactuar con la pagina
let inputTarea = document.getElementById("inputTarea");
let btnAgreagar = document.getElementById("btnAgregar");
let contenedorPrincipal = document.getElementById("contenedorPrincipal");
let parrafo = document.getElementById("contadorTexto")
let mensajeTareas = document.getElementById("mensajeTareas")

let contador = 0



//funcion que obtiene las tareas usando los metodos de la api, ademas que inserta esas tareas en 
// el div "contenedor principal"
async function obtenerTareas() {//esta funcion sirve para llamar los elementos de la api
                                //y crear los elementos
    let datos = await getTask();
    datos.forEach((element) => {//for each usado para recorrer todos los datos del api
    let contenedor = document.createElement("div");
    contenedor.className = "contenedorTareas";
    contenedor.id = element.id//contenedor id va a ser igual al id del elemento
    id = element.id//ahora el id va a ser igual a elemento, se envia esto como parametro
    //gracias a eso sabemos cual es el id que queremos enviar 
    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";//bloque de codigo que crea el checkbox
    checkbox.id = element.id;
    if (contenedorPrincipal.innerHTML != '') {
      mensajeTareas.innerHTML = ''
    }
    
    
    if (element.estado == "completo") {// revisa el estado del elemento  y en base 
      checkbox.checked = true         //a como este se le cambia 
    }else if (element.estado == "incompleto"){
      checkbox.checked = false
    }
    if (checkbox.checked == true) {//si encuentra un check activo, se incrementa el contador
      contador++
      parrafo.innerHTML = contador
    }
   
    checkbox.onclick = function agregarContador() {
      obtenerTareas()
      if(checkbox.checked == true){//revisa el estado del check para cambiar las propiedades del objeto 
        estadoTarea = "completo"
      }else if(checkbox.checked == false){
        estadoTarea = "incompleto"
      }
  
      putTask(checkbox.id, estadoTarea)
     }
    
   
    let tarea = document.createElement("p");
    tarea.className = "tareaTexto"
    tarea.innerHTML = element.tarea;//el valor interno de tarea va a ser igual a la iteracion del elemento

    let inputEdit = document.createElement("input")
    inputEdit.type = "text"
    inputEdit.id = element.id
    
    inputEdit.class = "inputEdit"
    inputText = inputEdit.value
    console.log(inputText)

    let icon = document.createElement("img");//bloque de codigo que crea la imagen y le da propiedades
    icon.src = "http://localhost:1234/compartimiento.97bc848e.png";
    icon.class = "icon"
    icon.addEventListener("click", () => {
      window.location.reload()
      delTask(contenedor.id)//se debe meter el addevent listener dentro de la funcion 
      
      getTask()

      
    });
    let iconEdit = document.createElement("img")
    
      iconEdit.src = "http://localhost:1234/editar.94a5d5fd.png"
      iconEdit.class = "iconEdit"
      iconEdit.addEventListener("click", async () => {
        console.log(element.id)
      
      updateTask(element.id,inputEdit.value)//se envian los prametros al api para ser actualizaodos

    })

    contenedor.appendChild(checkbox);
    contenedor.appendChild(tarea);//bloque de codigo que implementa los append
    contenedor.appendChild(inputEdit);
    contenedor.appendChild(iconEdit)
    contenedor.appendChild(icon);//agrega las cosas al contenedor principal
    contenedorPrincipal.appendChild(contenedor);
  });
  
 
}

obtenerTareas()

//funcion que para agregar las tareas usando el input


function addTask() {
  //esta funcion envia los parametros del input al api
   let inputTarea = document.getElementById("inputTarea");

   if (inputTarea.value.trim() == "") {
     alert("se debe ingresar texto");//valida que el usuario no pueda poner inputs vacios
   } else {
     

     let tarea = document.createElement("p");//crea una eqtiqueta p
     tarea.innerHTML = inputTarea.value;//le va dar un valor al inner la etiqueta p
     
     postTask(inputTarea.value);
     inputTarea.value = ""//Devuelve el valor de input a "vacio"
     }
 }

btnAgreagar.addEventListener("click",function () {
  addTask()
  obtenerTareas()

 
})

inputTarea.addEventListener("keydown",function (event) {
  if(event.keyCode == 13){//funcion para hacer que el input funcione con la tecla enter
  addTask()               //se usa keydown en vez de keypress por ser menos anticuado 
  }
  
})



