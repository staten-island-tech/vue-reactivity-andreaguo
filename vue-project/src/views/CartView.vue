<template>
  <div class="home">
    <div class="items">
    <section>
      <h1>Items in your cart:</h1>
      <p>{{ store.cart }}</p>
      
  
    </section>   
    

  </div>
  <div class="priceSummary">
    <h1 class="head">Summary</h1>
    <price v-for="ingredient in store.array"
    :key="ingredient.name"
    :ingredient="ingredient"/>
    <div class="input">
    <input type="text" placeholder="delivery instructions" v-model="message"/>
      <!-- <p>{{ message }}</p> -->
    <button v-on:click='authState' v-if="submit">submit</button>
    <button v-on:click='authState' v-else>edit</button>
    </div>
    
  </div>
  </div>
</template>

 <script>
import { store } from '../store.js'
import images from "../components/images.vue"
import price from "../components/price.vue"

export default{
  name:'Home',
  components: {
    images,
    price,
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
  display: flex;
  flex-direction: column;
  background-color: wheat;
  width: 30%;
  height: 70vh;
  display: flex;
  position: sticky;
  top: 20vh;
  align-items: center;
  margin: 3rem;
  border-radius: 15px;
}
.head{
  color: brown;
}

</style>
