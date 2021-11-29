<template>
  <div class="home">
    <h1>Using Refs</h1>
   <p ref="p"> home
    i am {{name}} - {{age}}</p>
    <button @click="handledCLick()">button</button>
    <button @click="age++">up age</button>
  <input type="text" v-model="name">

  <h2>{{jarredOne.age1}}</h2>
  <button @click="upDateJarred">updatejarred</button> 

  <h1>using reactive</h1>
  <p>{{jarredTwo.name}} {{jarredTwo.age}}</p>
  <button @click="upDateJarred2"> update reactive</button>

    <h1>computed</h1>
    <input type="text" v-model="search">
    <p> {{search}}</p>
    <div v-for="name in matchingName" :key="name">
      {{name}}
    </div>
    <button @click="stopwatchs"> stop</button>
  </div>

</template>

<script>
// @ is an alias to /src
import {ref, reactive,computed, watch, watchEffect} from 'vue' 

export default {
  name: 'test',
  //setup runs before anything else.
  //you write js in here
  //data is reactive values and setup is not
  setup(){

    const jarredOne = ref({name1:"jarerd", age1:27})
    const jarredTwo = reactive({name:"jarerdreact", age:27})

//updataing refs
    const upDateJarred = ()=> {
      jarredOne.value.age1 = 25
    }

//updating Reactives
      const upDateJarred2 = ()=> {
      jarredTwo.age = 25
    }

  //with out the ref tag it not reactive but with it, it is.  
   const name = ref('jarred');
   const age  = ref(27); 
  //this is how to ref element within the template
   const p = ref(p);

   
   const handledCLick = ()=> {
     console.log(p, p.value)
     p.value.classList.add("test")
     p.value.textContent = "hello world"
     name.value = "testing"
   }
   
  //computed
  //finds the name that are the same or contants whats in it.
  const search = ref('')
  const computedName = ref(['Jarred','tessa','pavlov']); 
  const  matchingName = computed(()=>{
    return computedName.value.filter((name)=> name.includes(search.value))
  })

  //watch

  // below is watching the searching feild and will be trigger when something is inputed.
  const stopWatch = watch(search,()=> {
    console.log("watch")
  })

//always run on first load
 const stopWatchEff = watchEffect(()=> {
    console.log("watch eff",search.value)
  })

// to stop watch or watchEff you would make it a function and call the function
  const stopwatchs = ()=> {
    stopWatch(); 
    stopWatchEff(); 
  }

   return({
     //when the name of the var is the name you can shortin it.
     //you need to return anything that need to be avillavbe in the code 
     name, age:age, handledCLick,p,jarredOne,upDateJarred,jarredTwo,upDateJarred2,computedName,search,matchingName,stopwatchs
   })

  }
}
</script>
