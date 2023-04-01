<template>
    <div class="price">
        <p>{{ calc(ingredient) }}</p>
    </div>
</template>

<script>
import { store } from '../store.js'

export default{
    name: 'price',
    data(){
        return{
            store,
        };
    },
    props: {
        ingredient: Object,
    },
    methods:{
        calc: function(ingredient){
            // const array = store.bBowl
            // const order = store.order
            // array.push(ingredient.price)
            // let sum = array.reduce((a, b) => a + b, 0);
            // order.push(sum);
            let arr = [];
            let order = store.bBowl
            arr.push(ingredient.price)
            let sum = arr.reduce((a, b) => a + b, 0);
            order.push(sum)
            console.log(sum)
        }
    }
}
</script>

<style>
.price{
    color: brown;
}
</style>