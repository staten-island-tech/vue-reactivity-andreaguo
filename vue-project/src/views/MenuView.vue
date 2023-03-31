<template>
  <div class="about">
    <div>
    <h1>Place your order here:</h1>
    <images
    :img="ingredients.img"
    />
    <p>selected:{{ store.array }}</p>
  </div>
<div>
    <card 
      v-for="ingredient in ingredients" 
      :key="ingredient.name"
      :ingredient="ingredient"
      />
  </div>

  </div>
</template>

<script>

import { store } from '../store.js'

import card from "../components/card.vue";
import images from "../components/images.vue"

export default{
  name: 'about',
  components: {
    card,
    images,
  },
  data(){
    return{ 
      store,
      ingredients: [
        {
          name: "BROWN RICE",
          price: 0,
          calories: "210 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5002-brown-rice/web-mobile/order.png",
        },
        {
          name: "WHITE RICE",
          price: 0,
          calories: "210 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5001-white-rice/web-mobile/order.png",
          style: "top: 70px; left: 20px; height: 10rem;"
        },
        {
          name: "BLACK BEANS",
          price: 0,
          calories: "130 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5051-black-beans/web-mobile/order.png",
        },
        {
          name: "PINTO BEANS",
          price: 0,
          calories: "130 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5052-pinto-beans/web-mobile/order.png",
        },
        {
          name: "CHICKEN AL PASTOR",
          price: 11.60,
          calories: "200 cal",
          img: "https://fastfoodnutrition.org/item-photos/full/167891457961772.png",
        },
        {
          name: "CHICKEN",
          price: 11.10,
          calories: "180 cal",
          img: "https://www.chipotle.fr/content/dam/chipotle/global-site-design/en/menu/menu-items/in-store/menu-items/chicken/primary/chicken.png",
        },
        {
          name: "STEAK",
          price: 12.85,
          calories: "150 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-6602-steak/web-mobile/order.png",
        },
        {
          name: "BARBACOA",
          price: 12.85,
          calories: "170 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-6604-barbacoa/web-mobile/order.png",
        },
        {
          name: "CARNITAS",
          price: 11.75,
          calories: "210 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-6603-carnitas/web-mobile/order.png ",
        },
        {
          name: "SOFRITAS",
          price: 11.10,
          calories: "150 cal",
          img: "https://www.chipotle.co.uk/content/dam/chipotle/global-site-design/en/menu/menu-items/in-store/menu-items/sofritas/primary/sofritas.png",
        },
        {
          name: "VEGGIE",
          price: 11.10,
          calories: "0 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-1025-large-side-of-guac/web-mobile/order.png",
        },
        

        {
          name: "FRESH TOMATO SALSA",
          price: 0,
          calories: "25 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5201-fresh-tomato-salsa/web-mobile/order.png",
        },
        {
          name: "ROASTED CHILI-CORN SALSA",
          price: 0,
          calories: "80 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5202-roasted-chili-corn-salsa/web-mobile/order.png",
        },
        {
          name: "TOMATILLO-GREEN CHILI SALSA",
          price: 0,
          calories: "15 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5203-tomatillo-green-chili-salsa/web-mobile/order.png",
        },
        {
          name: "TOMATILLO-RED CHILI SALSA",
          price: 0,
          calories: "30 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5204-tomatillo-red-chili-salsa/web-mobile/order.png",
        },
        {
          name: "SOUR CREAM",
          price: 0,
          calories: "110 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5251-sour-cream/web-mobile/order.png",
        },
        {
          name: "FAJITA VEGGIES",
          price: 0,
          calories: "20 cal",
          img: "https://www.chipotle.co.uk/content/dam/chipotle/global-site-design/en/menu/menu-items/in-store/menu-items/fajita-vegetables/primary/fajita_veg.png",
        },
        {
          name: "CHEESE",
          price: 0,
          calories: "110 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-5252-monterey-jack-cheese/web-mobile/order.png",
        },
        {
          name: "ROMAINE LETTUCE",
          price: 0,
          calories: "5 cal",
          img: "https://www.chipotle.co.uk/content/dam/chipotle/global-site-design/en/menu/menu-items/in-store/menu-items/lettuce/primary/lettuce@3x.png",
        },
        {
          name: "QUESO BLANCO",
          price: 1.80,
          calories: "120 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-1031-large-side-of-queso-blanco/web-mobile/order.png",
        },
        {
          name: "GUACAMOLE",
          price: 2.95,
          calories: "230 cal",
          img: "https://www.chipotle.com/content/dam/chipotle/global/menu/menu-items/cmg-1025-large-side-of-guac/web-mobile/order.png",
        },
      ],
    };
  },
  computed: {
    now: function(){
      const time = new Date();
      return `${time.getHours()}:${time.getMinutes()}`;
    },
  },
  methods: {
    addRemove: function(topping){
      if (selected.includes(topping)) {
        this.selected.indexOf('topping')
        // splice, indexOf
      } else {
        
      }
    }
  },
}
</script>



<style scoped>
h1{
  color: white;
  font-size: 1.5rem;
}
.checkbox{
  margin-right: 1rem;
}
#protein, #rice{
  margin: 0.5rem;
}


@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  .about {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}

</style>