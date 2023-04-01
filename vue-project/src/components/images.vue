<template>
    <div class="images">
    <div v-if="selectedIngr.type === 'rice'">
      <img class="riceOne" :src="selectedIngr.img" alt="">
      <img class="riceTwo" :src="selectedIngr.img" alt="">
      <img class="riceThree" :src="selectedIngr.img" alt="">
    </div>
    <!-- <div v-else-if="selectedIngr.type ==='sauce'">
      <img class="sauce" :src="selectedIngr.img" alt="">
    </div> -->
    <div v-else>
      <img class="otherOne" :src="selectedIngr.img" alt="">
      <img class="otherTwo" :src="selectedIngr.img" alt="">

    </div>
    

</div>
</template>



<script>
import { store } from '../store.js'

export default{
  name: "images",
  data(){
    return{
      store,
    };
  },
  props: {
    selectedIngr: Object,
    },
  methods:{},
}
</script>

<style>
.images {
  position: relative;
  top: 0;
  left: 0;
}
.bowl{
  position: relative;
  height: 25rem;
  top: 2rem;
  left: 1rem;
  z-index: 0;
}

.riceOne {
  position: absolute;
  top: -4rem;
  left: 2rem;
  z-index: 1;
  height: 13rem;
}
.riceTwo {
  position: absolute;
  top: -4rem;
  left: 7rem;
  z-index: 1;
  height: 13rem;
}
.riceThree{
  position: absolute;
  top: -4rem;
  left: 12rem;
  z-index: 1;
  height: 13rem;
}
.sauce{
  position: absolute;
  top: -4rem;
  left: 20rem;
  height: 10rem;
  z-index: 2;
}
.otherOne{
  position: absolute;
  top: -4rem;
  left: 10rem;
  height: 13rem;
  z-index: 2;
}
.otherTwo{
  position: absolute;
  top: -4rem;
  left: 4rem;
  height: 13rem;
  z-index: 2;
}
</style>