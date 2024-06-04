const postTask = async (tarea) => {
try {
      const response = await fetch('http://localhost:3000/api/todo', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
         },
         body: JSON.stringify({

           tarea: tarea,
      
          })
       });
       const data = await response.json()
     } catch(error) {


        console.log(error)
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









export {postTask,getTask}
   