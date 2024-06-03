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
    asyncPostCall = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/todo', {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                // your expected POST request payload goes here
                        title: inputTarea.value,

                       })
         // your expected POST request payload goes her
             });
             const data = await response.json();
          // enter you logic when the fetch is successful
             console.log(data);
           } catch(error) {
         // enter your logic for when there is an error (ex. error toast)
    
              console.log(error)
             } 
        }
   asyncPostCall()     
})


