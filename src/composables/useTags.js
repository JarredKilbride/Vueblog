import {ref} from 'vue'

const useTags = (post) => {

    const tags = ref([]); 
    // using set cause it dosent allow dups 
    const tagSet = new Set()

    post.forEach(item => {
        item.tags.forEach(tag=> tagSet.add(tag))
    });
    //need to 
    tags.value = [...tagSet]

    return { tags }
}

export default useTags