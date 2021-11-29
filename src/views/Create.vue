<template>
    <div class="create">
        <form @submit.prevent="handleSubmit">
            <label>Title</label>
            <input v-model="title" type="text" required>
            <label>Content</label>
            <textarea v-model="body" required></textarea>
            <label>tags (hit enter to add tag)</label>
            <input v-model="tag" type="text" @keydown.enter.prevent="handleKeyDown">
            <div v-for="tag in tags" :key="tag" class="pill">
                #{{tag}}
            </div>
             <!-- key down only works if the user press enter but wont submit the form. -->
            <button>Add Post</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import createPost from '../composables/createPost'
import { projectFirestore, timeStamp } from '../firebase/config'

export default {    
    setup(){
        const title = ref('')
        const body = ref('')
        const tag = ref('')
        const tags = ref([])

    const handleKeyDown = () => {
        if(!tags.value.includes(tag.value)){
            tag.value = tag.value.replace(/\s/,'') //removes white space
            tags.value.push(tag.value)
        }
        tag.value = ''
    }

    //this is how you use the this.$router in setup.
    const router = useRouter()
    // router.go(-1) // goes back one page 
    // router.go(1) goes forward one page
    console.log(router)

    const handleSubmit = async() => {
        const post = {
        title: title.value, 
        body:body.value, 
        tags:tags.value,
        createdAt: timeStamp()
        
        }

    //creating a new post in firebase.
    let res = await projectFirestore.collection('posts').add(post)

    //dont need with fire base
    //      await fetch('http://localhost:3000/posts',{
    //          method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body:JSON.stringify(post) 
    //    });

       //send you to the homw page when object is created.
        router.push({name: 'Home'})
    // below dose the same thing as the top but it is external
    //     createPost({title: title.value, 
    //     body:body.value, 
    //     tags:tags.value})
    // }
    }
        return{title,body,tag,tags,handleKeyDown,handleSubmit}
    }
}
</script>

<style>
    form {
        max-width: 480px;
        margin: 0 auto;
        text-align: center;
    }
    input,textarea {
        display: block;
        margin: 10px auto;
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        border: 1px solid rgb(157, 157, 157);
    }
    textarea {
        height: 160px;
    }
    label {
        display: inline-block;
        margin-top:30px;
        position: relative;
        font-size: 20px;
        color: white;
        margin-bottom: 10px;
    }
    label::before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background: #ff8800;
        position: absolute;
        z-index: -1;
        padding-right: 40px;
        left:-30; 
        transform: rotateZ(-1.5deg);
    }
button {
    display: block;
    margin-top:30px; 
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px;
}

    .pill {
        display: inline-block;
        margin-top:10px 10px 0 0; 
        color: #444;
        background: #ddd;
        padding: 8px; 
        border-radius: 20px;
        font-size: 14px;

    }
</style>