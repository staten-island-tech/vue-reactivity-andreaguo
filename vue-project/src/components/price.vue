<template>
    <div class="price">
        {{ push(item.price, item.name) }}
    </div>
</template>

<script>
import { store } from '../store.js'

export default{
    name: "price",
    data(){
        return{
            store,
        };
    },
    props: {
        item: Object,
    },
    methods:{
        push(price, name){
            store.bBowl.push(price)
            store.order.push(name)
        }
    }
}
</script>

<style scoped>
.price{
    color: transparent;
}
</style>