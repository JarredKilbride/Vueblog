import { ref } from "vue"

const createPost = async (ob) => {
    const error = ref(null)
   
     try{
         fetch('http://localhost:3000/posts',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(ob) 
       }); 
       
     }
     catch(err){
       error.value = err.message
       console.log(error.value)
     }
   

   return {error}
}

export default createPost