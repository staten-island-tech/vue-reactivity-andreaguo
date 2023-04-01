<template>
  <h1>Place your order here:      
</h1>
  <div class="about">
    <div class="orderImg">

    <!-- <p>selected:{{ store.array }}</p> -->
    <images
    v-for="item in store.array"
    :key="item.name"
    :selectedIngr="item"
    />

    <img class="bowl" src="https://store.worldcentric.com/SSP%20Applications/NetSuite%20Inc.%20-%20SCA%20Kilimanjaro/Development/img/items/BO-SC-UBB-P_02.png?resizeid=2&resizeh=175&resizew=175" alt="">

  </div>
  <div class="options">    <Button>complete</Button>

    <card 
      v-for="ingredient in ingredients" 
      :key="ingredient.name"
      :ingredient="ingredient"
      />
  </div>
  <footer>cool</footer>

  </div>
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
h1{
  color: white;
  font-size: 1.5rem;
}

.about{
  height: 750vh;
  display: flex;
  margin: 0;
}

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

.options{
  width: 50%;
}
.options div{
  display: flex;
    flex-direction: column;
    align-items: center;
}


@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }
}

</style>