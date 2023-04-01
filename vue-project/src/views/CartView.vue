<template>
  <div class="home">
    <p>{{ store.cart }}</p>

    <input type="text" placeholder="delivery instructions" v-model="message"/>
    <p>{{ message }}</p>
    
    <button v-on:click='authState' v-if="submit">submit</button>
    <button v-on:click='authState' v-else>edit</button>

  </div>
</template>

 <script>
import { store } from '../store.js'

export default{
  name:'Home',
  components: {},
  data() {
    return{
      store,
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
