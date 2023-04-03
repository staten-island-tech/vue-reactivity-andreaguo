<template>
  <div class="home">
    <div class="items">
    <section>
      <h1>Items in your cart:</h1>
      <p>{{ store.order }}</p>
        
    </section>   

  </div>
  <div class="priceSummary">
    <h1 v-if="submit" class="head">Your Order</h1>
    <h1 v-else class="head">{{name}}'s Order</h1>
    <h2 class="head">Your Total is</h2>

    <price v-for="ingredient in store.array"
    :key="ingredient.name"
    :item="ingredient"/>
    <h2 class="print">${{ store.bBowl.reduce((a, b) => a + b, 0) }}</h2>

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
h1,h2{
  font-family: 'Caveat', cursive;
  font-family: 'Fredericka the Great', cursive;
}
.home{
  position: relative;
  height: 150vh;
  display: flex;
  margin: 0;
  background-color: black;
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
  opacity: 40%;

}
section{
  margin-left: 2rem;
  margin-top: 8rem;
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
h1{
  font-size: 2rem;
}
.head{
  color: rgb(88, 25, 25);
  top: 5%;
}
.print{
  color: rgb(88, 25, 25);
  position: absolute;
  top: 40%;
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
