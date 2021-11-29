import { ref } from "vue"
import { projectFirestore } from "../firebase/config"

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)
   
   const load = async () => {
     try{
       //when getting one post you us doc to ref that id than do a get()
      let res = await projectFirestore.collection('posts').doc(id).get()


      //exists is a feild that firebase retruns. false if not real true if it is
      if(!res.exists) {
        throw Error('that post is not real')
        
      }
      else {
      // getting the data and then spred op on it and post it in the function
      post.value = {...res.data(),id:res.id}
      }
      //dont need it anymore 
      //  let data = await fetch('http://localhost:3000/posts/'+id); 
      //  //this check to see if there was any errors
      //  if(!data.ok){
      //    throw Error("Post is not real")
      //  }
      //  //wait for fetch request to return then update the data
      //  post.value = await data.json()
     }
     catch(err){
       error.value = err.message
       console.log(error.value)
     }
   }

   return { post,error,load}
}

export default getPost