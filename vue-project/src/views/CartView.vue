<template>
  <div class="home">
    <div class="items">
    <section>
      <h1>Items in your cart:</h1>
      <p>{{ store.cart }}</p>
        
    </section>   

  </div>
  <div class="priceSummary">
    <h1 v-if="submit" class="head">Your Order</h1>
    <h1 v-else class="head">{{name}}'s Order</h1>
    <h2 class="head">Your Total is</h2>

    <price v-for="ingredient in store.array"
    :key="ingredient.name"
    :item="ingredient"/>
    <!-- <h1>{{ calc(ingredient) }}</h1> -->
    

    <div class="inputA">
    <input type="text" placeholder="name" v-model="name"/>

    <button v-on:click='authState' v-if="submit">submit</button>
    <button v-on:click='authState' v-else>edit</button>

    </div>

    <div class="inputB">
    <select v-model="selected">
      <option>Pick Up</option>
      <option>Delivery</option>
      <option>Dine in</option>
    </select>
    <span>{{ selected }}</span></div>
    

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
      submit: true,
    };
  },
  methods:{
    authState(){
      if(this.submit === false){
        this.submit = true;
      }else{
        this.submit = false;
      }
    },
    }  
    
  }
</script>

<style scoped>
.home{
  position: relative;
  height: 100vh;
  display: flex;
  margin: 0;
  
}
.home::before{
  content: '';
  background-image: url('https://tb-static.uber.com/prod/image-proc/processed_images/8ea6182d78b6a4b6cf52bd181606ae72/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg');
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 20%;

}
section{
  margin-left: 2rem;
  margin-top: 6rem;
  height: 20vh;
  font-size: 3vh;
  color: white;
}
.items{
  position: relative;
  display: flex;
  flex-direction: column;
  width: 70%;
} 
.priceSummary{
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: wheat;
  width: 30%;
  height: 70vh;
  display: flex;
  /* position: sticky; */
  top: 10vh;
  align-items: center;
  margin: 3rem;
  border-radius: 15px;
}
.head{
  color: brown;
}
.inputA{
  position: absolute;
  bottom: 4rem;
}
.inputB{
  position: absolute;
  bottom: 2rem;
}
</style>
