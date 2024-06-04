let btnAgreagar = document.getElementById("btnAgregar")
let inputTarea = document.getElementById("inputTarea")

// let tarea = {
//     task: inputTarea.value
// }
// async function getTask() {
//     try{
//         const response = await fetch('http://localhost:3000/api/todo')
//         const data = await response.json()
//         console.log(data)
//     } catch(error){
//         console.log(error)
//     }
// } 
// getTask()
btnAgreagar.addEventListener("click", function () {
    asyncPostCall = async () => {//funcion que hace un llamado al api
        try {
            const response = await fetch('http://localhost:3000/api/todo', {
             method: 'POST',//aca se especifica el methodo a usar en el api
             headers: {
               'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                // el body va a ser igual a un objeto
                        title: inputTarea.value,

                       })
                       
      
             });
             const data = await response.json();//data que contiene la respuesta del servidor 
             data.forEach(element => {
              console.log(element.title)
              return element.title
             });
      
           } catch(error) {
         // enter your logic for when there is an error (ex. error toast)
    
              console.log(error)
             } 
        }
   asyncPostCall()     
})


elem