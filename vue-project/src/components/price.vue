<template>
    <div class="price">
        <p>{{ calc(item) }}</p>
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
        item: Object,
    },
    methods:{
    calc(item){
      let arr = store.bBowl;
      arr.push(item.price)
      return arr
    } 
    }
}
</script>

<style>
.price{
    color: brown;
}
</style>