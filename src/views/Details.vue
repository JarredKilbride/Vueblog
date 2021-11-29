<template>
<div>
  <div v-if="error"> {{error}} </div>
  <div v-if="post" class="post"> 
      <h3>{{post.title}}</h3>
      <p class="pre">{{post.body}}</p> 
      <button class="delete" @click="handleClick">Delete Post</button>
      </div>
    <div v-else>
        <Spinner/>
    </div>
  </div>
</template>
// import the API componets and then calling it and filling in the feilds. 
<script>
import getPost from '../composables/getPost'
import Spinner from '../components/spinner'
import {useRoute, useRouter} from 'vue-router'
import { projectFirestore } from '../firebase/config'
export default {
props: ['id'], 
  components: {Spinner },
setup(props){
    const route = useRoute()
    //importing it to bee able to push user to the home page on delete.
    const router = useRouter()

    //calling API
    //you can uise route.params.id to get the id couse its getting it from the route. /id <- 
   const{post,error,load} = getPost(props.id); 

   load(); 

   const handleClick = async () => {
     //deletes post from API
     await projectFirestore.collection('posts')
     .doc(props.id)
     .delete()
      // we could also use the '/' to send us some.
      // send user back to home page if post is deleted.
     router.push({name: 'Home'})
   }
   return { post,error,handleClick}
}
}
</script>

<style>
    .post {
        max-width: 1200px;
        margin: 0 auto;
    }
    .post p {
        color: #444; 
        line-height:1.5em;
        margin-top: 40px;
    }
    .pre {
        white-space: pre-wrap;
    }
    button.delete {
      margin: 10px auto;
    }
</style>