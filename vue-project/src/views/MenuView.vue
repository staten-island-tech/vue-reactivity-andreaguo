<template>
  <header> DESIGN YOUR VERY OWN BOWL</header>

  <div class="about">
    <div class="orderImg">

    <!-- <p>selected:{{ store.array }}</p> -->
    <images
    v-for="item in store.array"
    :key="item.name"
    :selectedIngr="item"
    />

    <img class="bowl" src="https://store.worldcentric.com/SSP%20Applications/NetSuite%20Inc.%20-%20SCA%20Kilimanjaro/Development/img/items/BO-SC-UBBS-P_02.png?resizeid=2&resizeh=175&resizew=175" alt="">

  </div>
  <div class="options">    
    <card 
      v-for="ingredient in ingredients" 
      :key="ingredient.name"
      :ingredient="ingredient"
      />
      <Button @click="store.cart.push(store.array); store.bBowl.push(ingredient.price)"> COMPLETE </Button>
  </div>

  </div>
  <section class="footer">

  </section>
</template>

<script>

import { store } from '../store.js'

import card from "../components/card.vue";
import images from "../components/images.vue"
import Button from '../components/Button.vue'


export default{
  name: 'about',
  components: {
    card,
    images,
    Button,
  },
  data(){
    return{ 
      store,
      ingredients: [
        {
          name: "BROWN RICE",
          type: "rice",
          price: 0,
          calories: "210 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5002-brown-rice/web-mobile/order.png",
        },
        {
          name: "WHITE RICE",
          type: "rice",
          price: 0,
          calories: "210 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5001-white-rice/web-mobile/order.png",
          style: "top: 70px; left: 20px; height: 10rem;"
        },
        {
          name: "BLACK BEANS",
          type: "beans",
          price: 0,
          calories: "130 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5051-black-beans/web-mobile/order.png",
        },
        {
          name: "PINTO BEANS",
          type: "beans",
          price: 0,
          calories: "130 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5052-pinto-beans/web-mobile/order.png",
        },
        {
          name: "CHICKEN AL PASTOR",
          type: "protein",
          price: 11.60,
          calories: "200 cal",
          img: "https://fastfoodnutrition.org/item-photos/full/167891457961772.png",
        },
        {
          name: "CHICKEN",
          type: "protein",
          price: 11.10,
          calories: "180 cal",
          img: "https://www.chipotle.fr/content/dam/chipotle/global-site-design/en/menu/menu-items/in-store/menu-items/chicken/primary/chicken.png",
        },
        {
          name: "STEAK",
          type: "protein",
          price: 12.85,
          calories: "150 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-6602-steak/web-mobile/order.png",
        },
        {
          name: "BARBACOA",
          type: "protein",
          price: 12.85,
          calories: "170 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-6604-barbacoa/web-mobile/order.png",
        },
        {
          name: "CARNITAS",
          type: "protein",
          price: 11.75,
          calories: "210 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-6603-carnitas/web-mobile/order.png ",
        },
        {
          name: "SOFRITAS",
          type: "protein",
          price: 11.10,
          calories: "150 cal",
          img: "https://www.chipotle.co.uk/content/dam/chipotle/global-site-design/en/menu/menu-items/in-store/menu-items/sofritas/primary/sofritas.png",
        },
        {
          name: "VEGGIE",
          type: "sauce",
          price: 11.10,
          calories: "0 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-1025-large-side-of-guac/web-mobile/order.png",
        },
        {
          name: "FRESH TOMATO SALSA",
          type: "sauce",
          price: 0,
          calories: "25 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5201-fresh-tomato-salsa/web-mobile/order.png",
        },
        {
          name: "ROASTED CHILI-CORN SALSA",
          type: "sauce",
          price: 0,
          calories: "80 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5202-roasted-chili-corn-salsa/web-mobile/order.png",
        },
        {
          name: "TOMATILLO-GREEN CHILI SALSA",
          type: "sauce",
          price: 0,
          calories: "15 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5203-tomatillo-green-chili-salsa/web-mobile/order.png",
        },
        {
          name: "TOMATILLO-RED CHILI SALSA",
          type: "sauce",
          price: 0,
          calories: "30 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5204-tomatillo-red-chili-salsa/web-mobile/order.png",
        },
        {
          name: "SOUR CREAM",
          type: "sauce",
          price: 0,
          calories: "110 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5251-sour-cream/web-mobile/order.png",
        },
        {
          name: "FAJITA VEGGIES",
          type: "topping",
          price: 0,
          calories: "20 cal",
          img: "https://www.chipotle.co.uk/content/dam/chipotle/global-site-design/en/menu/menu-items/in-store/menu-items/fajita-vegetables/primary/fajita_veg.png",
        },
        {
          name: "CHEESE",
          type: "topping",
          price: 0,
          calories: "110 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5252-monterey-jack-cheese/web-mobile/order.png",
        },
        {
          name: "ROMAINE LETTUCE",
          type: "topping",
          price: 0,
          calories: "5 cal",
          img: "https://www.chipotle.co.uk/content/dam/chipotle/global-site-design/en/menu/menu-items/in-store/menu-items/lettuce/primary/lettuce@3x.png",
        },
        {
          name: "QUESO BLANCO",
          type: "sauce",
          price: 1.80,
          calories: "120 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-1031-large-side-of-queso-blanco/web-mobile/order.png",
        },
        {
          name: "GUACAMOLE",
          type: "sauce",
          price: 2.95,
          calories: "230 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-1025-large-side-of-guac/web-mobile/order.png",
        },
      ],
    };
  },
  methods: {},
}
</script>



<style scoped>
body {
    display: flex;
    place-items: center;
  }
header{
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(139, 97, 46);
    color: white;
    font-size: 5rem;
    text-shadow: rgb(34, 24, 11) 1px 0 20px;
}

h1{
  color: maroon;
  text-align: center;

}
#subtitle{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
/* parent div */
.about{  
  height: 700vh;
  display: flex;
  margin: 0;
}

/* static div */
.orderImg{
  width: 50%;
  height:100vh;
  display: flex;
  position: sticky;
  top: 0;
  justify-content: center;
  align-items: center;
  margin: 0;
}

/* scrolling div */
.options{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-image: url('https://i.pinimg.com/originals/41/de/1a/41de1ad0b9d49c05bd53c0e864393058.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.options div{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer{
  height: 90vh;
  background-color: blanchedalmond;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }
}

</style>