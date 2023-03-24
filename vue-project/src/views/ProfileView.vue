<template>
  <div class="home">
    <h1 v-if="graduated">{{ student }}</h1>
    <h1 v-else>This student was a dropout</h1>
    <ul>
      <li v-for="animal in animals"  :key=animal>{{ animal }}</li>
    </ul>
    <button v-on:click='authState' v-if="loggedIn">Log out</button>
    <button v-on:click='authState' v-else>Login</button>

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
      loggedIn:true,
    };
  },
  methods:{
    authState: function(){
      if(this.loggedIn === false){
        this.loggedIn = true;
      }else{
        this.loggedIn = false;
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
