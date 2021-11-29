<template>
  <div class="postlist">
      <div v-for="post in posts" :key="post.id">
          <SinglePost :post="post" />
      </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost'
export default {
    props: ['posts'],
    components: {SinglePost},
    //this how you pass props down to the setup.
    setup(props) {
        onMounted(()=>console.log("mounted"))
        onUnmounted(()=>console.log("unMounted"))
        onUpdated(()=> console.log("updated"))
    }
}
</script>

<style>

</style>