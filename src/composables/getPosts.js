import {ref} from 'vue' 
import { projectFirestore, timeStamp } from '../firebase/config.js'

const getPosts = () => {
    const posts = ref([    ]    )
    const error = ref(null)
    const showPosts = ref(true); 
   
   const load = async () => {
     try{
       //conccets to firebase and the the collection post within it
      const res = await projectFirestore.collection('posts')
      //the order by will sort out post by time 
      .orderBy('createdAt','desc')
      //getting the data from firebase
      .get()
      console.log(res)

      posts.value = res.docs.map(doc => {
        // console.log(doc.data())

        //when you getting data from firebase you have to use .data() to dispaly the data. id not incouted with that data.
        return {...doc.data(), id:doc.id}
      })

      //dont need any more 
      // await new Promise(resolved => {
      //   setTimeout(resolved,20)
      // })
      //  let data = await fetch('http://localhost:3000/posts'); 
      //  //this check to see if there was any errors
      //  if(!data.ok){
      //    throw Error("No Data")
      //  }
      //  //wait for fetch request to return then update the data
      //  posts.value = await data.json()
     }
     catch(err){
       error.value = err.message
       console.log(error.value)
     }
   }

   return { posts,error,load}
}


export default getPosts