<template>
<div>
  <h1>Real Time Data</h1>
  <div v-for="post in posts" :key='post.id' >
      <div> {{post.title}}</div>
  </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
export default {
    setup(){
        const posts = ref([])

        projectFirestore.collection('posts')
        .orderBy('createdAt','desc')
        //snap shot is a like a get but it is in real time so if i make a change it will get an update. only workings with fire base. ti4
        .onSnapshot((snap)=> {
            let doc = snap.docs.map(doc => {
                return { ...doc.data(), id:doc.id }
            })
            posts.value = doc
        })

    return { posts}
    }
}
</script>

<style>

</style>