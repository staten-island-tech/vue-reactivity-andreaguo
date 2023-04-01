import { reactive } from 'vue'

export const store = reactive({
    array: [],   //array of things in each bowl
    cart: [],    //array of bowls in the cart
    bBowl: [],   //array of costs of the bowl
    order: [],   //array of costs of everything
  })