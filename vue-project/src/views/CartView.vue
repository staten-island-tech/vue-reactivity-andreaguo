<template>
  <div class="home">
    <div class="items">
    <section>
      <h1>Items in your cart:</h1>
      <p>{{ store.cart }}</p>
      
  
    </section>   
    

  </div>
  <div class="priceSummary">
    <p v-for="ingredient in store.cart"
    :key="ingredient.name"> {{ ingredient.price }}</p>

    <input type="text" placeholder="delivery instructions" v-model="message"/>
      <!-- <p>{{ message }}</p> -->
    <button v-on:click='authState' v-if="submit">submit</button>
    <button v-on:click='authState' v-else>edit</button>
  </div>
  </div>
</template>

 <script>
import { store } from '../store.js'
import images from "../components/images.vue"


export default{
  name:'Home',
  components: {
    images,
  },
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
.home{
  height: 150vh;
  display: flex;
  margin: 0;
}
section{
  margin-left: 2rem;
  margin-top: 6rem;
  height: 20vh;
  font-size: 3vh;
  color: white;
}
.items{
  display: flex;
  flex-direction: column;
  width: 70%;

} 
.priceSummary{
  background-color: wheat;
  width: 30%;
  height: 50vh;
  display: flex;
  position: sticky;
  top: 0;
  justify-content: center;
  align-items: center;
  margin: 0;
}

</style>
