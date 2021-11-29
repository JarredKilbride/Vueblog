<template>
  <div class="tag"  v-if="posts.length" >
      <h1>{{tag}}</h1>
      <!-- <Postlist :posts="matchingTags"/> -->
      <div>
      <div v-for="post in matchingTags" :key="post.id">
          <SinglePost :post="post" />
      </div>
      </div>
      <TagCloud :posts="matchingTags"/>
  </div>
  <spinner v-else />
</template>

<script>
import { computed } from 'vue'
import getPosts from '../composables/getPosts'
import Postlist from '../components/Postlist.vue'
import SinglePost from '../components/SinglePost'
import TagCloud from '../components/TagCloud'
import Spinner from '../components/spinner.vue'
export default {
props: ['tag'], 
components: {SinglePost,Spinner,TagCloud},
setup(props) {
       const { posts,error,load} = getPosts();
     load();

    const matchingTags = computed(()=>{
        return posts.value.filter(p=>p.tags.includes(props.tag))
    })
 return{posts,error,matchingTags}
}
}
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>