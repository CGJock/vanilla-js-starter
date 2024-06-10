const postTask = async (tarea) => {
try {
      const response = await fetch('http://localhost:3000/api/todo', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
         },
         body: JSON.stringify({

           tarea: tarea,
           estado: "incompleto"
      
          })
       });
       const data = await response.json()
       
      window.location.reload()
       
     } catch(error) {


        alert("error")
       } 
  }

  const getTask  = async() => {
    try{
      
      const response = await fetch('http://localhost:3000/api/todo');
      
      const data = await response.json()
      return data
      
    } catch(error){
      console.log(error)
    }
    
  }
//utiliza el parametro id que es igual al id de los contenedores
  const delTask = async(id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/todo/${id}`, {
       method: 'DELETE',//llama al metodo que se va a usar 
       headers: {
         'Content-Type': 'application/json'
         },
         
       });
       const data = response.json()//obtiene la data convertida a json
       window.location.reload()//se recarga cada vez que la pagina se recarga
       
      
     } catch(error) {
      
        console.log("no se puede borrar")
       } 
  }

  const putTask = async(id,estadoTarea) => {
    try {
      const response = await fetch(`http://localhost:3000/api/todo/${id}`, {
       method: 'PUT',
       headers: {
         'Content-Type': 'application/json'
         },
         body: JSON.stringify({

           
           estado: estadoTarea
      
          })
          
       });
       const data = await response.json()
       window.location.reload()
       
       
     } catch(error) {


        console.log(error)
       } 
  }
  const updateTask = async (id,inputEdit) => {
    try {
          const response = await fetch(`http://localhost:3000/api/todo/${id}`, {
           method: 'PUT',
           headers: {
             'Content-Type': 'application/json'
             },
             body: JSON.stringify({
    
               tarea: inputEdit,
               
          
              })
           });
           const data = await response.json()
           
          window.location.reload()
           
         } catch(error) {
    
    
            alert("error")
           } 
      }

  export {postTask,getTask,delTask,putTask,updateTask}
   