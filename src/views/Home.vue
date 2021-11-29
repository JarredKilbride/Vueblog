<template>
  <div class="home">
    <!-- if there is a error than display it -->
    <p v-if="error"> {{error}}</p>
    <!-- show post if there is data if not than show loading. -->
    <div v-if="posts.length" class="layout">
      <!-- this is a improt of a componets -->
      <!-- passing the porops as a prop -->
    <Postlist :posts="posts"/>
    <TagCloud  :posts="posts"/>
    </div>
    <Spinner v-else />
  </div>

</template>

<script>
// @ is an alias to /src

//dont need it anymore cause use the getPosts has the import.
// import {ref} from 'vue' 
import Postlist from '../components/Postlist.vue'
import getPosts from '../composables/getPosts'
import TagCloud from '../components/TagCloud'
import Spinner from '../components/spinner'

export default {
  components: { Postlist,Spinner,TagCloud },
  name: 'Home',
  setup(){
    //calling the function that 
   //put the returns in a object for then it can used.
   const { posts,error,load} = getPosts();
     load();

//you can make everything in the set but it better to make a snother files if you're going to be reusing the js
  
  //   const posts = ref([    ]    )
  //   const error = ref(null)
  //   const showPosts = ref(true); 
   
  //  const load = async () => {
  //    try{
  //      let data = await fetch('http://localhost:3000/posts'); 
  //      //this check to see if there was any errors
  //      if(!data.ok){
  //        throw Error("No Data")
  //      }
  //      //wait for fetch request to return then update the data
  //      posts.value = await data.json()
  //    }
  //    catch(err){
  //      error.value = err.message
  //      console.log(error.value)
  //    }
  //  }
   
   
   return{posts,error}

  }
}
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
 }
 .layout {
   display: grid;
   grid-template-columns: 3fr 1fr;
   gap: 20px
 }
</style>