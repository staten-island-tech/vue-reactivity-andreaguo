<template>
  <div class="home">

    <h1 v-if="graduated">{{ student }}</h1>
    <h1 v-else>This student was a dropout</h1>
    <ul>
      <li v-for="animal in animals"  :key=animal>{{ animal }}</li>
    </ul>
    
    <input type="text" placeholder="delivery instructions" v-model="message"/>
    <p>{{ message }}</p>
    
    <button v-on:click='authState' v-if="submit">submit</button>
    <button v-on:click='authState' v-else>edit</button>

  </div>
</template>

 <script>
export default{
  name:'Home',
  components: {},
  data() {
    return{
      student: 'Harry',
      graduated: true,
      animals: ["pig", 'horse', 'donkey', 'cow', 'duck'],
      submit:true,
    };
  },
  methods:{
    authState: function(){
      if(this.submit === false){
        this.submit = true;
      }else{
        this.submit = false;
      }
    },
  },
}
</script>

<style scoped>
h1{
  color: orange;
}
</style>
