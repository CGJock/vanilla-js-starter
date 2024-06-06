import { postTask, getTask, delTask, putTask } from "./index.js";

let inputTarea = document.getElementById("inputTarea");
let btnAgreagar = document.getElementById("btnAgregar");
let contenedorPrincipal = document.getElementById("contenedorPrincipal");
let parrafo = document.getElementById("contadorTexto")

let contador = 0



//funcion que obtiene las tareas usando los metodos de la api, ademas que inserta esas tareas en 
// el div "contenedor principal"
async function obtenerTareas() {
    
    let datos = await getTask();
    datos.forEach((element) => {//for each usado para recorrer todos los datos del api
    let contenedor = document.createElement("div");
    contenedor.className = "contenedorTareas";
    contenedor.id = element.id//contenedor id va a ser igual al id del elemento
    id = element.id//ahora el id va a ser igual a elemento, se envia esto como parametro
    //gracias a eso sabemos cual es el id que queremos enviar 
    console.log(element.estado)
   
    console.log(element.tarea,id,element.estado);


    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";//bloque de codigo que crea el checkbox
    checkbox.id = "checkbox";
   
    if (element.estado === "completo") {
      checkbox.checked = true
      if (checkbox.checked) {
        contador++
        parrafo.innerHTML = contador
      }else{
        contador--
        parrafo.innerHTML = contador
      }
    }
   //funcion que va a utilizr un put para actualizar la data
   
    checkbox.addEventListener("click", () => {
      
    putTask(contenedor.id, "completo")//se debe meter el addevent listener dentro de la funcion 
        
        
      });
/////////////////////////////////////////////////////////////////////
    let tarea = document.createElement("p");
    tarea.innerHTML = element.tarea;//el valor interno de tarea va a ser igual a la iteracion del elemento

    let icon = document.createElement("img");
    icon.src = "http://localhost:1234/compartimiento.97bc848e.png";
    icon.class = "icon"
    icon.addEventListener("click", () => {
      delTask(contenedor.id)//se debe meter el addevent listener dentro de la funcion 
    });

    contenedor.appendChild(checkbox);
    contenedor.appendChild(tarea);//bloque de codigo que implementa los append
    contenedor.appendChild(icon);//agrega las cosas al contenedor principal
    contenedorPrincipal.appendChild(contenedor);
  });
}

obtenerTareas()
//funcion que para agregar las tareas usando el input 
btnAgreagar.addEventListener("click", function addTask() {
  if (inputTarea.value.trim() == "") {
    alert("se debe ingresar texto");
    return false;
  } else {
    let contenedor = document.createElement("div");
    contenedor.className = "contenedorTareas";//se se da ese classname para poder editarlo 

    let checkbox = document.createElement("input");//creacion de un imput checkbox
    checkbox.type = "checkbox";
    checkbox.id = "checkbox";
  


    let tarea = document.createElement("p");//crea una eqtiqueta p
    tarea.innerHTML = inputTarea.value;//le va dar un valor al inner la etiqueta p

    // let icon = document.createElement("img");
    // icon.src = "http://localhost:1234/compartimiento.97bc848e.png";
    // icon.class = "icon";

    // contenedor.appendChild(checkbox);//le ingresa un checbox a los contenedores
    // contenedor.appendChild(tarea);//le agrega el valor del input al contenedor "p"
    // contenedor.appendChild(icon);
    // contenedorPrincipal.appendChild(contenedor);

    postTask(inputTarea.value);
    inputTarea.value = ""//Devuelve el valor de input a "vacio"
  }
});

